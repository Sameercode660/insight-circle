import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import type { Server as HttpServer } from "http";
import type { Socket } from "socket.io";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dev: boolean = process.env.NODE_ENV !== "production";
const hostname: string = "localhost";
const port: number = 3000;

const users = new Map<string, string>();

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer: HttpServer = createServer(handler);

  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  });

  io.on("connect", (socket: Socket) => {
    console.log("A client connected");

    socket.on("join-user", (userId) => {
      users.set(userId, socket.id);
      console.log("user with id: ", userId, "joined");
      socket.emit("user-joined", userId);
    });

    socket.on("send-message", async (reciverId, senderId, messageObject) => {
      try {
        // Save message to the database
        const savedMessage = await prisma.message.create({
          data: messageObject,
          include: { user: true },
        });
    
        // Emit message to both sender and receiver if connected
        const reciver_socket_id = users.get(reciverId);
        const sender_socket_id = users.get(senderId);
    
        if (reciver_socket_id) {
          io.to(reciver_socket_id).emit("receive-message", savedMessage);
        }
    
        if (sender_socket_id) {
          io.to(sender_socket_id).emit("receive-message", savedMessage);
        }
      } catch (err) {
        console.error("Error saving message:", err);
        socket.emit("error", "Failed to save message");
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  httpServer
    .once("error", (err: Error) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});

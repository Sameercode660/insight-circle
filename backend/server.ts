// import { createServer } from "node:http";
// import next from "next";
// import { Server } from "socket.io";
// import type { Server as HttpServer } from "http";
// import type { Socket } from "socket.io";

// const dev: boolean = process.env.NODE_ENV !== "production";
// const hostname: string = "localhost";
// const port: number = 3000;

// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port });
// const handler = app.getRequestHandler();

// app.prepare().then(() => {
//   const httpServer: HttpServer = createServer(handler);

//   const io = new Server(httpServer, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//       allowedHeaders: ["Content-Type", "Authorization"],
//     },
//   });

//   io.on("connect", (socket: Socket) => {
//     console.log("A client connected");

//     socket.on("disconnect", () => {
//       console.log("Client disconnected");
//     });
//   });

//   httpServer
//     .once("error", (err: Error) => {
//       console.error(err);
//       process.exit(1);
//     })
//     .listen(port, () => {
//       console.log(`> Ready on http://${hostname}:${port}`);
//     });
// });

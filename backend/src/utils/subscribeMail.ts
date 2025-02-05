import nodemailer from 'nodemailer';

type SendSubscriptionAcknowledgmentProps = {
  recipientEmail: string;
  subscriberName: string; // Added subscriber name
};

const sendSubscriptionAcknowledgment = async ({
  recipientEmail,
  subscriberName,
}: SendSubscriptionAcknowledgmentProps) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,  
      },
    });

    const mailOptions = {
      from: 'Insight Circle <privatething789736@gmail.com>',
      to: recipientEmail,
      subject: `Welcome to Insight Circle, ${subscriberName}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h1 style="text-align: center; color: #4CAF50;">Welcome to Insight Circle, ${subscriberName}!</h1>
          <p style="font-size: 16px; color: #333; text-align: center;">
            Hi ${subscriberName}! 👋 Thank you for subscribing to Insight Circle. You're now part of a community that stays ahead with the latest updates, insights, and exclusive content!
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <img src="" alt="Insight Circle" style="max-width: 100%; border-radius: 8px;">
          </div>
          <p style="font-size: 16px; color: #555; text-align: center;">
            Stay tuned for updates directly in your inbox. We'll keep you informed about the latest trends, articles, and exclusive offers.
          </p>
          <p style="font-size: 14px; color: #666; text-align: center; margin-top: 20px;">
            Have any questions or suggestions? We'd love to hear from you. Just reply to this email, and we’ll get back to you as soon as we can!
          </p>
          <p style="text-align: center; margin-top: 30px;">
            <a href="https://yourwebsite.com" style="background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
              Visit Our Website
            </a>
          </p>
          <footer style="text-align: center; margin-top: 30px; font-size: 12px; color: #aaa;">
            &copy; ${new Date().getFullYear()} Insight Circle. All rights reserved. <br />
            <a href="https://yourwebsite.com/unsubscribe" style="color: #4CAF50; text-decoration: none;">Unsubscribe</a>
          </footer>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return { success: true, message: 'Subscription acknowledgment email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send subscription acknowledgment email' };
  }
};

export default sendSubscriptionAcknowledgment;

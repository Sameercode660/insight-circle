import nodemailer from 'nodemailer';

type SendQuestionAcknowledgmentProps = {
  recipientEmail: string;
  userName: string;
  question: string;
};

const sendQuestionAcknowledgment = async ({
  recipientEmail,
  userName,
  question,
}: SendQuestionAcknowledgmentProps) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: 'Insight Circle <privatething789736@gmail.com>',
      to: recipientEmail,
      subject: 'Thank You for Your Question!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="text-align: center; color: #4CAF50;">Thank You for Reaching Out, ${userName}!</h2>
          <p style="font-size: 16px; color: #333;">We’ve received your question and will get back to you with an answer as soon as possible.</p>
          <div style="background-color: #f9f9f9; border-left: 4px solid #4CAF50; padding: 15px; margin: 20px 0; font-size: 16px; color: #555;">
            <strong>Your Question:</strong> 
            <p style="margin-top: 5px;">${question}</p>
          </div>
          <p style="font-size: 14px; color: #666;">
            If you have any further queries, feel free to reach out to us anytime.
          </p>
          <p style="font-size: 14px; color: #666; text-align: center;">
            Thank you for trusting Insight Circle!
          </p>
          <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #aaa;">
            &copy; ${new Date().getFullYear()} Insight Circle. All rights reserved.
          </footer>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return { success: true, message: 'Acknowledgment email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send acknowledgment email' };
  }
};

export default sendQuestionAcknowledgment;

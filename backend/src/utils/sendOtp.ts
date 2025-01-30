import nodemailer from 'nodemailer';

type SendOTPProps = {
  recipientEmail: string;
  otp: string;
};

const sendOTP = async ({ recipientEmail, otp }: SendOTPProps) => {
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
      subject: 'Your OTP for Insight Circle',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="text-align: center; color: #4CAF50;">Welcome to Insight Circle</h2>
          <p style="font-size: 16px; color: #333;">Your One-Time Password (OTP) is:</p>
          <div style="font-size: 24px; font-weight: bold; text-align: center; margin: 20px 0; color: #4CAF50;">${otp}</div>
          <p style="font-size: 14px; color: #666;">
            Please enter this OTP on the website to verify your account. This OTP is valid for 10 minutes.
          </p>
          <p style="font-size: 14px; color: #666; text-align: center;">
            If you did not request this, please ignore this email.
          </p>
          <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #aaa;">
            &copy; ${new Date().getFullYear()} Insight Circle. All rights reserved.
          </footer>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send OTP' };
  }
};

export default sendOTP;

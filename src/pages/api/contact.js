// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }

  const { name, email, requestType, message } = req.body;

  if (!name || !email || !requestType || !message) {
    return res.status(400).json({ status: "error", message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "evysoft13@gmail.com", // Your email to receive messages
      subject: `New Contact Request: ${requestType}`,
      text: `
You received a new contact request from the website:

Name: ${name}
Email: ${email}
Service: ${requestType}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ status: "success", message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({
      status: "error",
      message: "Email sending failed",
      error: error.message,
    });
  }
}
  
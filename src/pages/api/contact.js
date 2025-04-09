// pages/api/contact.js
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Or another service provider
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phone, name,email, message } = req.body;

    try {
      // Create reusable transporter object using the default SMTP transport
      

      // Send the email
      const info = await transporter.sendMail({
        from: `${name} <daraluloom.fz@gmail.com>`, // Sender address
        to: 'daraluloom.fz@gmail.com', // Recipient address
        subject: `${name} - New Enquiry From "Dar Aluloom"`, // Subject line
        html: `
          <p>Dar Aluloom Team,</p>
          <p>Enquiry From: <b>${name}</b></p>
          <p>Contact Number: <b>${phone}</b></p>
          <p>Message: <b>${message}</b></p>
          <p>Email: <b>${email}</b></p>
          <p><b style="color:green">Best Regards,</b></p>
          <p>${name}</p>
          <p>Page Link: <b>${req.headers.referer}</b></p>
        `,
      });

      console.log('Email sent successfully:', info);

      // Send response
      res.status(200).json({ status: 'success', message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ status: 'error', message: 'Failed to send email' });
    }
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    try {
      // Create reusable transporter (use your real email & app password / SMTP)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // or your SMTP provider
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      // Send email
      await transporter.sendMail({
        from: `"Website Contact" <${process.env.MAIL_USER}>`,
        to: "vinok81@gmail.com", // owner’s email
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      });

      res.status(200).json({ success: true, message: "Message sent!" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS?.replace(/\s+/g, ''), // Ensure no spaces in App Password
  },
});

// Verify SMTP connection
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('Server is ready to send messages');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const mailOptions = {
    from: `"Evolutionary Computation Enterprises" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `Website Inquiry from ${name}: ${subject || 'New Contact Request'}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'None'}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2>New Inquiry from ECE Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'None'}</p>
        <hr />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Booking endpoint — sends Google Meet link to both parties
app.post('/api/booking', async (req, res) => {
  const { name, email, date, time, duration } = req.body;

  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'Name, email, date, and time are required' });
  }

  const meetLink = process.env.GOOGLE_MEET_LINK || 'https://meet.google.com';

  // Email to the owner (you)
  const ownerMail = {
    from: `"Evolutionary Computation Enterprises" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `New Call Booking from ${name} - ${date} at ${time} IST`,
    text: `New call booking received.\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time} IST\nDuration: ${duration || '30 min'}\n\nGoogle Meet: ${meetLink}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #5a4fcf; padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">New Call Booking Request</h1>
        </div>
        <div style="background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Name</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Date</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${date}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Time</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${time} IST</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Duration</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${duration || '30 min'}</td></tr>
          </table>
          <div style="margin-top: 24px; text-align: center;">
            <a href="${meetLink}" style="display: inline-block; background: #5a4fcf; color: #fff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">Join Google Meet</a>
          </div>
        </div>
      </div>
    `,
  };

  // Confirmation email to the client
  const clientMail = {
    from: `"Evolutionary Computation Enterprises" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Your Call with Evolutionary Computation Enterprises - ${date} at ${time} IST`,
    headers: {
      'X-Mailer': 'ECE Booking System',
      'Precedence': 'bulk',
    },
    text: `Hi ${name},\n\nThank you for scheduling a call with Evolutionary Computation Enterprises.\n\nBooking Details:\nDate: ${date}\nTime: ${time} IST\nDuration: ${duration || '30 min'}\nPlatform: Google Meet\n\nJoin your meeting here: ${meetLink}\n\nPlease join the meeting at the scheduled time using the link above.\nIf you need to reschedule, reply to this email.\n\nBest regards,\nEvolutionary Computation Enterprises`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #5a4fcf; padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">Your Call is Confirmed</h1>
          <p style="color: #e0d5ff; margin: 8px 0 0; font-size: 14px;">Evolutionary Computation Enterprises</p>
        </div>
        <div style="background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px;">
          <p style="font-size: 15px; color: #374151; margin-bottom: 20px;">Hi <strong>${name}</strong>,</p>
          <p style="font-size: 14px; color: #6b7280; line-height: 1.6;">Thank you for scheduling a call with us. Here are your booking details:</p>
          <div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #6b7280; font-size: 13px;">Date</td><td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #111827;">${date}</td></tr>
              <tr><td style="padding: 6px 0; color: #6b7280; font-size: 13px;">Time</td><td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #111827;">${time} IST</td></tr>
              <tr><td style="padding: 6px 0; color: #6b7280; font-size: 13px;">Duration</td><td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #111827;">${duration || '30 min'}</td></tr>
              <tr><td style="padding: 6px 0; color: #6b7280; font-size: 13px;">Platform</td><td style="padding: 6px 0; font-weight: bold; font-size: 13px; color: #111827;">Google Meet</td></tr>
            </table>
          </div>
          <div style="text-align: center; margin: 24px 0;">
            <a href="${meetLink}" style="display: inline-block; background: #5a4fcf; color: #fff; padding: 14px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 15px;">Join Google Meet</a>
          </div>
          <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 20px;">Please join the meeting at the scheduled time using the link above.<br/>If you need to reschedule, simply reply to this email.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 11px; color: #d1d5db; text-align: center;">Evolutionary Computation Enterprises</p>
        </div>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(ownerMail),
      transporter.sendMail(clientMail)
    ]);
    res.status(200).json({ success: true, message: 'Booking confirmed, emails sent to both parties', meetLink });
  } catch (error) {
    console.error('Error sending booking emails:', error);
    res.status(500).json({ error: 'Failed to send booking confirmation' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

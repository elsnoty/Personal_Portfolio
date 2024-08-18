import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/send-email', (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message } = req.body;

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password',
    },
  });

  // Email options
  const mailOptions: SendMailOptions = {
    from: email,
    to: 'your_email@gmail.com',
    subject: 'New Contact Form Message',
    text: message,
  };

  // Send email
  transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

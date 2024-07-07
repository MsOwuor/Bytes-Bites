const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001; // Choose your desired port

app.use(express.json());
app.use(cors());

// Endpoint to handle form submission and send email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'YourEmailService', // E.g., 'Gmail', 'Outlook', etc.
    auth: {
      user: 'your-email@example.com', // Your email address
      pass: 'your-password' // Your email password (not recommended, use environment variables)
    }
  });

  // Setup email data
  let mailOptions = {
    from: `"Contact Form" <${email}>`,
    to: 'your-company-email@example.com', // Receiver's email address
    subject: 'Message from Contact Form',
    text: `
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
    `
  };

  try {
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error occurred while sending email:', error.message);
    res.status(500).json({ error: 'An error occurred while sending email' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

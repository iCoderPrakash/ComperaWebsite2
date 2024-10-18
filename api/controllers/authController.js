const authSchema = require("../models/auth.model");
const nodemailer = require("nodemailer");

const authController = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneno, message } = req.body;
    const existingUser = await authSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Save data to the database
    const newauth = new authSchema({
      firstname,
      lastname,
      email,
      phoneno,
      message,
    });
    await newauth.save();

    // Setup Nodemailer transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID, 
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email options
    let mailOptions = {
      from: email, 
      to: "icoder.prakash@gmail.com",
      subject: "New Form Submission",
      text: `You have a new form submission:
      First Name: ${firstname}
      Last Name: ${lastname}
      Email: ${email}
      Phone No: ${phoneno}
      Message: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error.message);
        return res.status(500).json({ error: "Email sending failed" });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(201).json({ message: "Data added and email sent successfully" });
      }
    });
  } catch (error) {
    console.error("Error saving data:", error.message);
    return res.status(500).json({ error: "Server error, could not save data" });
  }
};

module.exports = authController;

const { contactUsEmail} = require("../mail/contactFormRes")
const {contactUsEmailtoMe} = require("../mail/contactFormRestome")
const mailSender = require("../utils/mailSender")
const dotenv = require("dotenv");
dotenv.config();
const Contact = require("../models/Contact")

exports.contactUsController = async (req, res) => {
  const { email, name, contactNo, message } = req.body
  try {
    const emailRes = await mailSender(
      email,
      "Your Message sent successfully",
      contactUsEmail(email, name, message)
    )
    const emailResfromUser = await mailSender(
      process.env.MAIL_USER,
      "DATA RECIEVED",
      contactUsEmailtoMe(email, name, message)
    )
    await Contact.create({
      name: name,
      email: email,
      message: message,
      contactNo: contactNo,
    });
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
      return res.json({
        success: false,
        message: "Something went wrong...",
      })
  }
}
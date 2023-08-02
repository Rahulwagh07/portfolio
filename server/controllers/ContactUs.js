const { contactUsEmail} = require("../mail/contactFormRes")
const {contactUsEmailtoMe} = require("../mail/contactFormRestome")
const mailSender = require("../utils/mailSender")
const dotenv = require("dotenv");
dotenv.config();
exports.contactUsController = async (req, res) => {
  const { email, firstname, message } = req.body
  console.log("PRINTINT RES", req.body)
  try {
    const emailRes = await mailSender(
      email,
      "Your Message sent successfully",
      contactUsEmail(email, firstname, message)
    )
    console.log("Email Res ", emailRes)
    const emailResfromUser = await mailSender(
      process.env.MAIL_USER,
      "DATA RECIEVED",
      contactUsEmailtoMe(email, firstname, message)
    )
    console.log("PRINTING RES OF  HOST", emailResfromUser)
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
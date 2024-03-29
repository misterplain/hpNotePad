const router = require("express").Router();
const nodemailer = require("nodemailer");
const nodeMailerConfirmationEmail = require("../utils/nodeMailer");

router.post("/", async (req, res) => {
  const { result, name, email, message, phoneNum } = req.body;
  const { source } = req.query;

  console.log({ result, name, email, message, phoneNum });

  const test = nodeMailerConfirmationEmail(source, req.body);

  try {
    const emailSent = await nodeMailerConfirmationEmail(source, req.body);
    return res
      .status(200)
      .json({ message: "Message sent successfully" + emailSent });
  } catch (error) {
    nodeMailerConfirmationEmail(source, { message: "Failure to send message" });
    return res.status(500).json({ message: "Error sending message" });
  }
  console.log(test);
});
module.exports = router;

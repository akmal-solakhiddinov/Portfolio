import { createTransport } from "nodemailer";

const userName = document.getElementById("name").value;
const userMAil = document.getElementById("mail").value;
const userTxt = document.getElementById("txt").value;

function myFunction() {
  var transporter = createTransport({
    service: "gmail",
    auth: {
      user: "akmalsalokhiddinov03@gmail.com",
      pass: ".akmal2003",
    },
  });

  var mailOptions = {
    from: userMAil /* "salohiddinovakmal28@gmail.com" */,
    to: "akmalsalokhiddinov03@gmail.com",
    name: userName  /* "Sending Email using Node.js" */,
    text:  userTxt/*  "That was easy!" */
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

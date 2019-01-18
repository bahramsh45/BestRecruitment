using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace BestRecruit.Utility
{
    public static class EmailService
    {
        public static  void SendVerificationLinkEmail(string emailId, string activationcode, string scheme, string host, string port)
        {
            var varifyUrl = scheme + "://" + host + ":" + port + "/Candidate/ActivateAccount/" + activationcode;
            var fromMail = new MailAddress("bahramin@gmail.com", "Welcome to Best Recruit");
            var toMail = new MailAddress(emailId);
           // var frontEmailPassowrd = "your password";
            string subject = "Your account created successfully";
            string body = "<br/><br/>We are excited to tell you that your account is" +
                          " successfully created. Please click on the below link to verify your account" +
                          " <br/><br/><a href='" + varifyUrl + "'>" + varifyUrl + "</a> ";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = true
                //Credentials = new NetworkCredential(fromMail.Address, frontEmailPassowrd)

            };
            using (var message = new MailMessage(fromMail, toMail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
            smtp.Send(message);
        }
    }
}

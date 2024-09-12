import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

class Mail {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
               
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true,
                minVersion: "TLSv1.2"
            }
        });
    }

    sendMail(from, to, subject, message, callback) {
        const mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: `(${from}) says: ${message}`,
        };

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                if (callback) {
                    callback(error, null);
                }
            } else {
                console.log('Email sent: ' + info.response);
                if (callback) {
                    callback(null, info.response);
                }
            }
        });
    }
}

export default Mail;

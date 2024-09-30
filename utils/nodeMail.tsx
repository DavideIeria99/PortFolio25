import nodemailer from "nodemailer";

const mailerUser = process.env.MAILER_AUTH_PROFILER;
const mailerKey = process.env.MAILER_AUTH_KEY;
const mailerHost = process.env.MAILER_AUTH_HOST;

export const MailerClient = nodemailer.createTransport({
    host: mailerHost,
    port: 2525,
    auth: {
        user: mailerUser,
        pass: mailerKey,
    },
});

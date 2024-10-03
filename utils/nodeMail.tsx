import nodemailer from "nodemailer";

const mailerUser = process.env.MAILER_AUTH_PROFILER;
const mailerKey = process.env.MAILER_AUTH_KEY;
const mailerHost = process.env.MAILER_AUTH_HOST;
const mailerPort = process.env.MAILER_AUTH_PORT as string;

export const MailerClient = nodemailer.createTransport({
    host: mailerHost,
    port: parseInt(mailerPort),
    auth: {
        user: mailerUser,
        pass: mailerKey,
    },
});

import { ConfigDotenv } from "dotenv";
import { createTransport } from "nodemailer";

ConfigDotenv();

const { EMAIL_PASS, EMAIL_USER } = process.env;

const transport = createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },

});
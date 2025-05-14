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

export const sendUserVerificationLink = async (baseURL : string, email: string) => {
    await transport.sendMail({
        text: "user Verification Link",
        to: email,
        from: EMAIL_USER,
        html:`
            <h1>Hello world</h1>
            `,
            

    });
};
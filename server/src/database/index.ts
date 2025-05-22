import { connect } from "mongoose";

export const connectDatabase = async () => {
    const dbConnectionString = process.env.MONGODB_CONNECTION_STRING="mongodb+srv://Deegii:OoJHcp0xLo0GXALG@morebleed.90ergcb.mongodb.net/";

    if (!dbConnectionString) throw new Error("Failed to connect MongoDB");

    try {
        await connect(dbConnectionString);

        console.log("Established connection to MongoDB");
    
    } catch (error) {
    console.error(error instanceof Error && error.message);
    }
};
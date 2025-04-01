import dotenv from "dotenv";
 dotenv.config();

export const PORT=5555 || process.env.PORT;
export const MongoDBURL=process.env.MongoDBURI



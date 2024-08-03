import express, { Application } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectionDB } from "./config/dbConnection";
import path from "path";
import peopleRouter from "./routes/people.route";
dotenv.config();
connectionDB();

const app: Application = express();
const port = process.env.PORT || 3000;

// middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors()); // it is important when sending form data from the client
app.use('/uploads', express.static('uploads'))

// routes
app.use("/api", peopleRouter);

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

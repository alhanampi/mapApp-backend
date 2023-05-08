import express, { Application } from "express";
import dotenv from "dotenv";
import dbConnection from "./config/database";
import pinRoute from "./routes/pin";
import userRoute from "./routes/users";

const app: Application = express();
const env = dotenv.config();
const PORT: number = (process.env.PORT as number | undefined) || 8080;
dbConnection();

if (env.error) {
  throw env.error;
}

app.use(express.json());

app.use("/api/pins", pinRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`server running in ${PORT}`);
});

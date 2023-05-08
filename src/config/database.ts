import mongoose, { ConnectOptions } from "mongoose";

const dbConnection = (): void => {
  mongoose
    .connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log("connected to atlas");
    })
    .catch((error: Error) => {
      console.log(`database exited with error: ${error}`);
      process.exit(1);
    });
};

export default dbConnection;

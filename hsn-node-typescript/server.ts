import "dotenv/config";
import express, { Express } from "express";
const configPipeline = require("./config-express/pipeline.js");
const app: Express = express();

configPipeline(app);

app.listen(3000, (error: Error | undefined): void => {
  if (error) {
    console.error("Error starting server:", error);
  }
  console.log("Server is running on port 3000");
});

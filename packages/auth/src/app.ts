import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.get("/api/v1/users/test", (req, res) => {
  res.send({ success: "The site is working" });
});

app.all("*", async () => {
  throw new Error();
});

export { app };

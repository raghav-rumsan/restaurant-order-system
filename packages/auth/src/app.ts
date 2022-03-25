import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { NotFoundError } from "@romass/backend-common";
import { currentUserRouter, signupRouter, siginRouter } from "./routes";

const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

// routes
app.use(signupRouter);
app.use(currentUserRouter);
app.use(siginRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

export { app };

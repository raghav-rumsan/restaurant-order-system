import express from "express";
import { AUTH_ROUTES } from "../config/routes";

const router = express.Router();

router.post(AUTH_ROUTES.SIGN_OUT, (req, res) => {
  req.session = null;
  res.send({});
});

export { router as signOutRouter };

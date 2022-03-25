import express, { Request, Response } from "express";
import { currentUser } from "@romass/backend-common";
import { AUTH_ROUTES } from "config/routes";

const router = express.Router();

router.get(
  AUTH_ROUTES.CURRENT_USER,
  currentUser,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserRoles } from "../types";

interface UserPayload {
  id: string;
  phone: string;
  role: UserRoles;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;

    req.currentUser = payload;
  } catch (error) {}

  next();
};

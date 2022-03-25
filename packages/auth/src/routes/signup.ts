import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import { BadRequestError } from "@romass/backend-common";
import { User } from "../models/user";
import { StatusCodes } from "http-status-codes";
import { validateRequest } from "@romass/backend-common";
import { AUTH_ROUTES } from "../config/routes";
import { signupValidation } from "../validations";

const router = express();

router.post(
  AUTH_ROUTES.SIGN_UP,
  signupValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, phone, role, password, organization, thumbnail } = req.body;

    // console.log("err", validationResult(req).array());

    // console.log("req.body", validationResult(req));
    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      throw new BadRequestError("Phone Number already in use");
    }

    const user = User.build({
      email,
      password,
      phone,
      role,
      organization,
      thumbnail,
    });

    await user.save();

    // Generate JWT
    const userJWT = jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        role: user.role,
      },
      process.env.JWT_KEY!
    );

    //   store it on the session obj
    req.session = {
      jwt: userJWT,
    };

    res.status(StatusCodes.CREATED).send(user);
  }
);

export { router as signupRouter };

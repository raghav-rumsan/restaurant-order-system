import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { BadRequestError } from "@romass/backend-common";
import { User } from "../models/user";
import { StatusCodes } from "http-status-codes";
import { validateRequest } from "@romass/backend-common";

const router = express();

router.post(
  "/api/v1/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be betwn 8 and 20"),
    body("phone")
      .isMobilePhone("ne-NP")
      .withMessage("Must be a valid mobile phone number"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, phone, role, password, organization, thumbnail } = req.body;

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

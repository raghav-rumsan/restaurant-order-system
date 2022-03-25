import { BadRequestError, validateRequest } from "@romass/backend-common";
import { AUTH_ROUTES } from "config/routes";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { User } from "models/user";
import { Password } from "services/password";
import { signinValidation } from "validations";

const router = Router();

router.post(
  AUTH_ROUTES.SIGN_IN,
  signinValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const { phone, password, role } = req.body;

    const existingUser = await User.findOne({ phone });

    if (!existingUser) {
      throw new BadRequestError("Invalid Credentials");
    }

    const passwordMatch = await Password.compare(
      existingUser.password,
      password
    );

    if (!passwordMatch) {
      throw new BadRequestError("Invalid Credentials");
    }

    // Generate JWT
    const existingUserJWT = jwt.sign(
      {
        id: existingUser.id,
        role: existingUser.role,
      },
      process.env.JWT_KEY!
    );

    //   store it on session object
    req.session = {
      jwt: existingUserJWT,
    };

    res.status(200).send(existingUser);
  }
);

export { router as siginRouter };

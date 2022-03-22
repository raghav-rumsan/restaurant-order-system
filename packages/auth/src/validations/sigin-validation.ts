import { body } from "express-validator";

export const signinValidation = [
  body("phone")
    .isMobilePhone("ne-NP")
    .withMessage("Phone number must be valid"),
  body("password").trim().notEmpty().withMessage("You must enter a password"),
];

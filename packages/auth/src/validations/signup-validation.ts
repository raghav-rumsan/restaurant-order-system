import { body } from "express-validator";

export const signupValidation = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be betwn 8 and 20"),
  body("phone")
    .isMobilePhone("ne-NP")
    .withMessage("Must be a valid Nepali mobile phone number"),
  body("organization")
    .isLength({ min: 1 })
    .withMessage("Enter the name of the organization"),
];

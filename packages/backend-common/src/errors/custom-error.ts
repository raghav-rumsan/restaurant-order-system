import { StatusCodes, ReasonPhrases } from "http-status-codes";

export abstract class CustomError extends Error {
  abstract statusCode: StatusCodes;

  constructor(message: ReasonPhrases) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): {
    message: ReasonPhrases;
    field?: string;
    statusCode: StatusCodes;
  }[];
}

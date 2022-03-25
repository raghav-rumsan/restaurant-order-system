import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { ValidationError } from "express-validator";

import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode: StatusCodes = StatusCodes.BAD_REQUEST;

  constructor(public errors: ValidationError[]) {
    super(ReasonPhrases.BAD_REQUEST);
  }

  serializeErrors(): {
    message: ReasonPhrases | string;
    field?: string;
    statusCode: StatusCodes;
  }[] {
    return this.errors.map((err) => {
      return {
        message: err.msg,
        field: err.param,
        statusCode: this.statusCode,
      };
    });
  }
}

import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode: StatusCodes = StatusCodes.UNAUTHORIZED;

  constructor(public message: ReasonPhrases = ReasonPhrases.UNAUTHORIZED) {
    super(message);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): {
    message: ReasonPhrases;
    field?: string;
    statusCode: StatusCodes;
  }[] {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}

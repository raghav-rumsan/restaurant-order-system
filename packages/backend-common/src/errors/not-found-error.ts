import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode: StatusCodes = StatusCodes.NOT_FOUND;

  constructor(public message: ReasonPhrases = ReasonPhrases.NOT_FOUND) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): {
    message: ReasonPhrases;
    field?: string;
    statusCode: StatusCodes;
  }[] {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}

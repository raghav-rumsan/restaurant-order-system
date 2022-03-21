import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode: StatusCodes = StatusCodes.NOT_FOUND;

  constructor(
    public message: ReasonPhrases | string = ReasonPhrases.NOT_FOUND
  ) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): {
    message: ReasonPhrases | string;
    field?: string;
    statusCode: StatusCodes;
  }[] {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}

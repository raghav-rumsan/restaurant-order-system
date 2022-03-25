import { CustomError } from "./custom-error";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export class BadRequestError extends CustomError {
  statusCode: StatusCodes.BAD_REQUEST = StatusCodes.BAD_REQUEST;
  // message: string= ReasonPhrases.BAD_REQUEST

  constructor(
    public message: ReasonPhrases | string = ReasonPhrases.BAD_REQUEST
  ) {
    super(message);
  }

  serializeErrors(): {
    message: ReasonPhrases | string;
    field?: string;
    statusCode: StatusCodes;
  }[] {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}

new BadRequestError("This is error");

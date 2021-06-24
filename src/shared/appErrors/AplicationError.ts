/* eslint-disable prettier/prettier */
export class ApplicationError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
        // eslint-disable-next-line no-unused-expressions
        this.message = message,
        this.statusCode = statusCode
  }
}

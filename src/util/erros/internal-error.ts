export class InternalError extends Error {
  constructor(
    public message: string,
    protected code: number = 500,
    protected description?: string
  ) {
    super(message);
    super.name = super.constructor.name;
    Error.captureStackTrace(this, super.constructor);
  }
}

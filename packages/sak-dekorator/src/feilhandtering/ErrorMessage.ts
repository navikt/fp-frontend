class ErrorMessage {
  text?: string;

  code?: string;

  params: any

  type?: string

  static withMessage(message: string, type?: string) {
    const errorMessage = new ErrorMessage();
    errorMessage.text = message;
    if (type !== undefined) {
      errorMessage.type = type;
    }
    return errorMessage;
  }

  static withMessageCode(messageCode: string, params: any, type?: string) {
    const errorMessage = new ErrorMessage();
    errorMessage.code = messageCode;
    errorMessage.params = params;
    if (type !== undefined) {
      errorMessage.type = type;
    }
    return errorMessage;
  }
}

export default ErrorMessage;

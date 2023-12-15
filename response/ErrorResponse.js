export default class ErrorResponse {
  static create(error) {
    return {
      message: error,
    };
  }
}

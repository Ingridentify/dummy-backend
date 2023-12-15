export default class LoginResponse {
  static create(user) {
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      token: user.token,
    };
  }
}

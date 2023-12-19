export default class LoginResponse {
  static create(user) {
    return {
      status: "Success",
      message: "Login Success",
      token: user.token,
      userData: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: "2023-12-19T14:29:43.000Z",
        updatedAt: "2023-12-19T14:29:43.000Z",
      },
    };
  }
}

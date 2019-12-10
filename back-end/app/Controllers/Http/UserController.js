"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password", "name", "cargo", "acesso"])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController

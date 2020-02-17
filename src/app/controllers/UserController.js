import User from '../models/User';

class UserController {
  async index() {
    const users = await User.find();
    return users;
  }

  async show(_, { id }) {
    const user = await User.findById(id);
    return user;
  }

  async store(_, { name, email }) {
    const user = await User.create({
      name,
      email,
    });

    return user;
  }
}

export default new UserController();

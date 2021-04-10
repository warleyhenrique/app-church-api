import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
  async store(request: Request, response: Response) {
    const repository = getRepository(User);
    const { name, email, password } = request.body;

    const checkUserExist = await repository.findOne({ where: { email } });

    if (checkUserExist) {
      return response.sendStatus(409);
    }

    try {
      const user = repository.create({ name, email, password });
      await repository.save(user);

      return response.send(user);
    } catch {
      return response.sendStatus(409);
    }
  }
}

export default new UserController();

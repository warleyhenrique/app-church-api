import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import userValidation from '../validations/userValidation';

class UserController {
  public async index(request: Request, response: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    if (!users) {
      return response.sendStatus(406);
    }

    return response.send(users);
  }

  public async show(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { id } = request.params;

    const user = await userRepository.findOne(id);

    if (!user) {
      return response.sendStatus(404);
    }

    return response.send(user);
  }

  public async store(request: Request, response: Response) {
    const repository = getRepository(User);
    const { name, email, password } = request.body;

    const checkUserExist = await repository.findOne({ where: { email } });

    if (checkUserExist) {
      return response.sendStatus(409);
    }

    const validationResult = userValidation.validate({ name, email, password }, {
      abortEarly: false,
    });

    if (validationResult.error) {
      const err = validationResult.error.details;
      return response.status(406).json(err);
    }

    try {
      const user = repository.create({ name, email, password });
      await repository.save(user);

      return response.send(user);
    } catch {
      return response.sendStatus(409);
    }
  }

  public async update(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { name, email, password } = request.body;
    const { id } = request.params;

    const checkUserExist = await userRepository.findOne(id);

    if (!checkUserExist) {
      return response.sendStatus(401);
    }

    const validationResult = userValidation.validate({ name, email, password }, {
      abortEarly: false,
    });

    if (validationResult.error) {
      const err = validationResult.error.details;
      return response.status(406).json(err);
    }

    try {
      userRepository.merge(checkUserExist, { name, email, password });
      const newUser = await userRepository.save(checkUserExist);

      return response.send(newUser);
    } catch {
      return response.sendStatus(403);
    }
  }

  public async delete(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { id } = request.params;

    const userExist = userRepository.findOne(id);

    if (!userExist) {
      return response.send(409);
    }

    try {
      await userRepository.delete(id);
      return response.status(200).json({ message: 'ok' });
    } catch {
      return response.sendStatus(409);
    }
  }
}

export default new UserController();

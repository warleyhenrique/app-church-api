import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
  public async authenticate(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { email, password } = request.body;

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      return response.status(403).json('unregistered user');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return response.status(401).json({ message: 'incorrect password' });
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

    // delete user.password;

    return response.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  }
}

export default new AuthController();

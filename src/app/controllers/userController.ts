import { Request, Response } from 'express';
import { getRepository} from 'typeorm'
import User from '../models/User';

interface DataRequest{
  name: string,
  email: string,
  password: string,

}

class UserController {
  public async store(request: Request, response: Response): Promise<User> {
    const { name, email, password } = request.body;

    const users = New User();
    return (User);
  }
}

export default UserController;

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Departament from '../models/Departament';

class DepartamentController {
  public async index(request: Request, response: Response) {
    const departamentRepository = getRepository(Departament);

    const departaments = await departamentRepository.find();

    if (departaments.length === 0) {
      return response.status(200).json('no registered departaments');
    }

    return response.json(departaments);
  }

  public async show(request: Request, response: Response) {
    const departamentRepository = getRepository(Departament);
    const { id } = request.params;

    const departament = await departamentRepository.findOne(id);

    if (!departament) {
      return response.status(400).json('user not found');
    }

    return response.send(departament);
  }

  public async store(request: Request, response: Response) {
    const departamentRepository = getRepository(Departament);
    const { name, description } = request.body;

    try {
      const departamentExist = await departamentRepository.findOne({ where: { name } });

      if (departamentExist) {
        return response.status(409).json('department already registered');
      }

      const newDepartament = departamentRepository.create({ name, description });
      await departamentRepository.save(newDepartament);

      return response.json(newDepartament);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  public async update(request: Request, response: Response) {
    const departamentRepository = getRepository(Departament);
    const { name, description } = request.body;
    const { id } = request.params;

    const departament = await departamentRepository.findOne(id);

    if (!departament) {
      return response.status(400).json('departament not found');
    }

    try {
      departamentRepository.merge(departament, { name, description });
      const newDepartament = await departamentRepository.save(departament);

      return response.json(newDepartament);
    } catch (err) {
      return response.status(406).json(err.message);
    }
  }

  public async destroy(request: Request, response: Response) {
    const departamentRepository = getRepository(Departament);
    const { id } = request.params;

    const departament = await departamentRepository.findOne(id);

    if (departament) {
      return response.status(406).json({ message: 'user not found' });
    }

    try {
      await departamentRepository.delete(id);

      return response.sendStatus(200);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}

export default new DepartamentController();

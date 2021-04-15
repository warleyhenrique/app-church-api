import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Departament from '../models/Departament';

class DepartamentController {
  public async index(resquest: Request, response: Response) {
    const departamentRepository = getRepository(Departament);

    const departaments = await departamentRepository.find();

    if (departaments.length === 0) {
      return response.status(200).json('no registered users');
    }

    return response.json(departaments);
  }

  public async show(resquest: Request, response: Response) {
    const departamentRepository = getRepository(Departament);
    const { id } = request.params;

    const departament = await departamentRepository.findOne(id);

    if (!departament) {
      return response.status(400).json('user not found');
    }

    return response.send(departament);
  }

  public async store(resquest: Request, response: Response) {
    const departamentRepository = getRepository(Departament);
    const { name, description } = request.body;

    const departamentExist = departamentRepository.find({ where: { name } });

    if (departamentExist) {
      return response.status(409).json('department already registered');
    }

    try {
      const newDepartament = departamentRepository.create({ name, description });
      await departamentRepository.save(newDepartament);

      return response.json(newDepartament);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  public async update(resquest: Request, response: Response) {
    const departamentRepository = getRepository(Departament);
    const { name, description } = request.body;
    const { id } = request.params;

    const departament = await departamentRepository.findOne(id);

    if (!departament) {
      return response.status(400).json('departament not found');
    }

    try {
      departamentRepository.merge(departament);
      const newDepartament = await departamentRepository.save(departament);

      return response.json(newDepartament);
    } catch (err) {
      return response.status(406).json(err.message);
    }

    return ('');
  }

  public async destroy(resquest: Request, response: Response) {
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

    return ('');
  }
}

export default new DepartamentController();

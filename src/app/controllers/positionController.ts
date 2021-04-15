import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Position from '../models/Position';
import memberValidation from '../validations/memberValidadtion';

class PositionController {
  public async index(request: Request, response: Response) {
    const positionRepository = getRepository(Position);

    const positions = await positionRepository.find();

    if (positions.length === 0) {
      return response.json({ message: 'there are no registered positions' });
    }

    return response.send(positions);
  }

  public async show(request: Request, response: Response) {
    const positionRepository = getRepository(Position);
    const { id } = request.params;

    const position = await positionRepository.findOne(id);

    if (!position) {
      return response.status(404).json({ message: 'id not found' });
    }

    return response.send(position);
  }

  public async store(request: Request, response: Response) {
    const positionRepository = getRepository(Position);
    const { name, description } = request.body;

    const positionExist = await positionRepository.findOne({ where: { name } });

    if (positionExist) {
      return response.status(409).json({ response: 'The position already been registered' });
    }

    try {
      const newPosition = positionRepository.create({ name, description });
      await positionRepository.save(newPosition);
      return response.status(201).send(newPosition);
    } catch (e) {
      return response.status(409).json(e.message);
    }
  }

  public async update(request: Request, response: Response) {
    const positionRepository = getRepository(Position);
    const dataMember = request.body;
    const { id } = request.params;

    const position = await positionRepository.findOne(id);

    if (!position) {
      return response.status(404).json({ message: 'id not found' });
    }

    const validationResult = memberValidation.validate(dataMember, {
      abortEarly: false,
    });

    if (validationResult.error) {
      return response.status(406).json(validationResult.error.details);
    }

    try {
      positionRepository.merge(position, dataMember);
      const newMember = await positionRepository.save(position);

      return response.send(newMember);
    } catch (e) {
      return response.status(409).json(e.message);
    }
  }

  public async destroy(request: Request, response: Response) {
    const positionRepository = getRepository(Position);
    const { id } = request.params;

    const memberExist = await positionRepository.findOne(id);

    if (!memberExist) {
      return response.status(404).json({ message: 'id not found' });
    }

    try {
      await positionRepository.delete(id);
      const result = positionRepository.save;

      return response.json(result);
    } catch (err) {
      return response.status(409).json(err.message);
    }
  }
}

export default new PositionController();

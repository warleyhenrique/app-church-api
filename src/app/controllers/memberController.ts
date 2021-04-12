import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Member from '../models/Member';

class MemberController {
  public async index(request: Request, response: Response) {
    const memberRepository = getRepository(Member);

    const members = await memberRepository.find();

    if (members.length === 0) {
      return response.sendStatus(204);
    }

    return response.send(members);
  }

  public async show(request: Request, response: Response) {
    return response.json({ message: 'Im production' });
  }

  public async store(request: Request, response: Response) {
    const memberRepository = getRepository(Member);
    const dataMember = request.body;
    const { cpf } = request.body;

    const memberExist = await memberRepository.findOne({ where: { cpf } });

    if (memberExist) {
      return response.status(409).json({ response: 'The CPF has already been registered' });
    }

    try {
      const newMember = memberRepository.create(dataMember);
      await memberRepository.save(newMember);
      return response.status(201).send(newMember);
    } catch (e) {
      console.log(e);
      return response.status(409).json(e.message);
    }
  }

  public async update(request: Request, response: Response) {
    return response.json({ message: 'Im production' });
  }

  public async delete(request: Request, response: Response) {
    return response.json({ message: 'Im production' });
  }
}

export default new MemberController();

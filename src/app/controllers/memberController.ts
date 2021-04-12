import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Member from '../models/Member';

class MemberController {
  public async index(request: Request, response: Response) {
    const memberRepository = getRepository(Member);

    const members = await memberRepository.find();

    if (members.length === 0) {
      return response.json({ return: 'there are no registered members' });
    }

    return response.send(members);
  }

  public async show(request: Request, response: Response) {
    const memberRepository = getRepository(Member);
    const { id } = request.params;

    const member = await memberRepository.findOne(id);

    if (!member) {
      return response.status(404).json({ message: 'id not found' });
    }

    return response.send(member);
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
      return response.status(409).json(e.message);
    }
  }

  public async update(request: Request, response: Response) {
    const memberRepository = getRepository(Member);
    const dataMember = request.body;
    const { id } = request.params;

    const member = await memberRepository.findOne(id);

    if (!member) {
      return response.status(404).json({ message: 'id not found' });
    }

    try {
      memberRepository.merge(member, dataMember);
      const newMember = await memberRepository.save(member);

      return response.send(newMember);
    } catch (e) {
      return response.status(409).json(e.message);
    }
  }

  public async delete(request: Request, response: Response) {
    const memberRepository = getRepository(Member);
    const { id } = request.params;

    const memberExist = memberRepository.findOne(id);

    if (!memberExist) {
      return response.status(404).json({ message: 'id not found' });
    }

    try {
      await memberRepository.delete(id);
      const result = memberRepository.save;

      return response.json;
    } catch (err) {

    }

    return response.json({ message: 'Im production' });
  }
}

export default new MemberController();

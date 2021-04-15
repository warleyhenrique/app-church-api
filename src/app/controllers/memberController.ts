import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Member from '../models/Member';
import memberValidation from '../validations/memberValidadtion';

class MemberController {
  public async index(request: Request, response: Response) {
    const memberRepository = getRepository(Member);

    const members = await memberRepository.find();

    if (members.length === 0) {
      return response.json({ message: 'there are no registered members' });
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

    const validationResult = memberValidation.validate(dataMember, {
      abortEarly: false,
    });

    if (validationResult.error) {
      return response.status(406).json(validationResult.error.details);
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

    const validationResult = memberValidation.validate(dataMember, {
      abortEarly: false,
    });

    if (validationResult.error) {
      return response.status(406).json(validationResult.error.details);
    }

    try {
      memberRepository.merge(member, dataMember);
      const newMember = await memberRepository.save(member);

      return response.send(newMember);
    } catch (e) {
      return response.status(409).json(e.message);
    }
  }

  public async destroy(request: Request, response: Response) {
    const memberRepository = getRepository(Member);
    const { id } = request.params;

    const memberExist = await memberRepository.findOne(id);

    if (!memberExist) {
      return response.status(404).json({ message: 'id not found' });
    }

    try {
      await memberRepository.delete(id);
      const result = memberRepository.save;

      return response.json(result);
    } catch (err) {
      return response.status(409).json(err.message);
    }
  }
}

export default new MemberController();

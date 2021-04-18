import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import Position from './Position';

@Entity('members')
class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName : string;

  @Column({
    type: 'date',
  })
  birthDay: Date;

  @Column({ nullable: true })
  rg: string;

  @Column()
  cpf: string;

  @Column({ nullable: true })
  fatherName: string;

  @Column({ nullable: true })
  motherName: string;

  @Column({ nullable: false })
  isBaptized: boolean;

  @Column({
    type: 'date',
    nullable: true,
  })
  baptizedDate: Date;

  @Column({ nullable: true })
  memberNumber: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  streetAddress: string;

  @Column({ nullable: true })
  numberAddress: string;

  @Column({ nullable: true })
  neighborhoodAddress: string;

  @Column({ nullable: true })
  cityAddress: string;

  @Column({ nullable: true })
  stateAddress: string;

  // eslint-disable-next-line no-unused-vars
  @ManyToOne((type) => Position, (members) => Member, { eager: true })
  position: Position

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

export default Member;

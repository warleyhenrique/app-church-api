import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('members')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName : string;

  @Column({
    type: 'date',
  })
  birthDay: Date;

  @Column()
  rg: string;

  @Column()
  cpf: number;

  @Column()
  fatherName: string;

  @Column()
  motherName: string;

  @Column()
  isBaptized: boolean;

  @Column({
    type: 'date',
  })
  baptizedDate: Date;

  @Column()
  memberNumber: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  streetAddress: string;

  @Column()
  numberAddress: string;

  @Column()
  neighborhoodAddress: string;

  @Column()
  cityAddress: string;

  @Column()
  stateAddress: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

export default User;

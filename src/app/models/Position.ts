import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany,
} from 'typeorm';
import Member from './Member';

@Entity('positions')
class Position {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  // eslint-disable-next-line no-unused-vars
  @OneToMany((type) => Member, (position) => Position)
  member: Member[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

export default Position;

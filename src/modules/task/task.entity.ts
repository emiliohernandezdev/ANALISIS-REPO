import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn({
    type: "int"
  })
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  done: boolean;
}

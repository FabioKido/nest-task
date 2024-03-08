import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, { onDelete: 'SET NULL' })
  @JoinColumn()
  employeeId: number;
}

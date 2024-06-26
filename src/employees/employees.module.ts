import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { Employee } from './entities/employee.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandler } from './queries';
import { CommandHandlers } from './commands';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Employee, ContactInfo])],
  controllers: [EmployeesController],
  providers: [...QueryHandler, ...CommandHandlers],
})
export class EmployeesModule {}

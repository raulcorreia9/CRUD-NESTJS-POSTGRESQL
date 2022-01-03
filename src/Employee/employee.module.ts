import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([Employee])
    ],
    providers: [EmployeeService],
    controllers: [EmployeeController],
})

export class EmployeeModule {}
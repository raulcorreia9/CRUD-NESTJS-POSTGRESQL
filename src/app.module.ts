import { EmployeeModule } from './Employee/employee.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Employee/employee.entity';
import * as process from 'process'

@Module({
  imports: [
    EmployeeModule,
    //forRoot() - Conexão do nest com o banco de dados
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha123',
      database: 'nest-crud',
      synchronize: true, // local only
      entities: [Employee],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

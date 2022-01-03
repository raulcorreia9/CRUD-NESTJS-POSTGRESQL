import { Employee } from './employee.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class EmployeeService{

    constructor(@InjectRepository(Employee) private employeeRepo: Repository<Employee>){}

    //Promise que retorna um array com todos do tipo Employee
    findAll(): Promise<Employee[]>{
        //find() faz a query com o parametro passado, caso não tenha parametro retorna todos os dados da table
        return this.employeeRepo.find(); // SELECT * from employee;
    }

    async findById(id: number): Promise<Employee>{
        try{
            const employee = await this.employeeRepo.findOneOrFail(id); // SELECT * from employee WHERE id = id;
            return employee;
        }catch (err){
            throw err;
        }
    }

    create(newEmployee){
        this.employeeRepo.insert(newEmployee);
    }

    update(employeeUpdate){
        this.employeeRepo.update(employeeUpdate.id, employeeUpdate);
    }

    delete(id){
        this.employeeRepo.delete(id);
    }
}
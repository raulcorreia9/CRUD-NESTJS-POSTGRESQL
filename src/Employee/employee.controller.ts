import { Employee } from './employee.entity';
import { Controller, Get, HttpCode, Post, Body, Delete, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController{
    
    constructor(private readonly employeeService: EmployeeService){}

    //Endpoint que retorna todos do tipo Employee
    @Get('all')
    async getAll(): Promise<Employee[]>{
        return await this.employeeService.findAll();
    }

    @Get('getOne/:id')
    async getOne(@Param() id: number): Promise<Employee>{
        return await this.employeeService.findById(id);
    }

    @Post('add')
    @HttpCode(201)
    createEmployee(@Body() newEmployee:any){
        this.employeeService.create(newEmployee);
    }

    @Post('update')
    @HttpCode(200)
    updateEmployee(@Body() employeeToUpdate:any){
        this.employeeService.update(employeeToUpdate);
    }

    @Delete('delete/:id')
    @HttpCode(200)
    deleteEmployee(@Param('id') id){
        this.employeeService.delete(id);
    }
}
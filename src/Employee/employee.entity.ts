import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() // Make table class
export class Employee {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    salary: number;

    @Column()
    age: number;
}
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;
      
    @Column({
        type:'varchar',
        nullable:false,
        length: 100,
    })    
    firstName:string;

    @Column({
        type:'varchar',
        nullable:false,
        length: 100,
    })
    lastName:string;   

    @Column({
        type:'varchar',
        nullable:true,
        length: 100,
    })
    gender?: string;

    @Column({
        type:'varchar',
        nullable:false,
        length: 100,
        unique:true,
    })
    email:string;

    @Column({
        type:'varchar',
        nullable:false,
        length: 100,
    })
    password:string;
}
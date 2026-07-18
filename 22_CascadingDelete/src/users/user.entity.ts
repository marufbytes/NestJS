import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "../profile/profile.entity";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        nullable:false,
        length: 24,
        unique:true,
    })
    username:string;      
    
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

    @OneToOne(()=>Profile,(profile)=>profile.user,{         //cascade here
        cascade:['insert'],        
    })
    profile?:Profile;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;
}
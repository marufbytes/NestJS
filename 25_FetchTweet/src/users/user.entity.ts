import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "../profile/profile.entity";
import { Tweet } from "../tweet/tweet.entity";

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;


    @OneToOne(()=>Profile,(profile)=>profile.user,{         //cascade here
        cascade:['insert'],        
    })
    profile?:Profile;


    @OneToMany(()=>Tweet,(tweet)=>tweet.user)
    tweets:Tweet[]
}
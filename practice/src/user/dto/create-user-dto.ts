import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class createUserDto{

    id:number;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsString()
    gender?:string;

    @IsNotEmpty()
    @IsString()
    email:string;

    @IsBoolean()
    @IsNotEmpty()
    isMarried:boolean;
}
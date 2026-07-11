import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class createUserDto{

    id:number;

    @IsString({message: 'Name should be a string value.'})
    @IsNotEmpty()
    @MinLength(3, {message: 'Name must have at least 3 characters'})
    name:string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsEmail()
    email:string;

    @IsBoolean()
    isMarried: boolean;
}
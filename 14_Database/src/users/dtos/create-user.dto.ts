import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class createUserDto{

  
    @IsString({message: 'First Name should be a string value.'})
    @IsNotEmpty()
    @MinLength(3, {message: 'First Name must have at least 3 characters'})
    firstName:string;

    @IsString({message: 'Last Name should be a string value.'})
    @IsNotEmpty()
    @MinLength(3, {message: 'Last Name must have at least 3 characters'})
    lastName:string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password:string;

}
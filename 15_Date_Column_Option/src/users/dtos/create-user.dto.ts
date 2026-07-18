import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator";

export class createUserDto{

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email:string;

    @IsNotEmpty()
    @MaxLength(24)
    username:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(100)
    password:string;

}
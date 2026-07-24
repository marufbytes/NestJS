import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class createProfileDto{

    
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
    @MaxLength(100)
    firstName?:string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @MinLength(3)
    @MaxLength(100)
    lastName?:string;

    @IsString()
    @IsOptional()
    @MaxLength(10)
    gender?:string;

    @IsOptional()
    @IsDate()
    @IsOptional()
    dateOfBirth?:Date

    @IsString()
    @IsOptional()
    bio?:string;

    @IsString()
    @IsOptional()
    profileImage?:string;

}
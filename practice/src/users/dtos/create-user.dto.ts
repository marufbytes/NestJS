import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class createUserDto {

    @IsString()
    @IsNotEmpty({ message: 'First name should not be empty' })
    @MinLength(3, { message: 'First name must have at least 3 characters' })
    firstName: string;

    @IsString()
    @IsNotEmpty({ message: 'Last name should not be empty' })
    lastName: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsEmail({}, { message: 'Invalid email address' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string;
}
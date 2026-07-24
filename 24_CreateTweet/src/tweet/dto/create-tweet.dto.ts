import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTweetDto{
    @IsOptional()
    @IsString()
    text:string;

    @IsOptional()
    image?:string;

    @IsNotEmpty()
    userId:number
}
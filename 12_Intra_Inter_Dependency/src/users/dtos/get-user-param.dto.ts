import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetuserPramDto{
    @IsBoolean()
    @IsOptional()
    @Type(()=>Boolean)
    isMarried:boolean
}
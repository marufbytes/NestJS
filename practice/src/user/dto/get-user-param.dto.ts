import { Transform } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetUserParamDto{
    @IsBoolean()
    @IsOptional()
    @Transform(({value})=>value==='true')
    isMarried:boolean
}
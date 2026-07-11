import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user-dto';
import { GetUserParamDto } from './dto/get-user-param.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){};


    @Get(':id')
    getUserByID(@Param('id')id:string){
        return this.userService.getUserById(+id);
    }


    @Get(':isMarried?')
    getUser(@Query('limit', new DefaultValuePipe(10), ParseIntPipe)limit:number,
            @Query('page', new DefaultValuePipe(3),ParseIntPipe) page:number,
            @Param(new ValidationPipe({transform:true})) param:GetUserParamDto)
    {
        console.log(param);
        console.log(limit,page);
        return this.userService.getAllUsers();
    }

    

    @Post()
    createUser(@Body()user:createUserDto){
        return 'A new user has been created';
    }
}

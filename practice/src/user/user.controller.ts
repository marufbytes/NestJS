import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user-dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){};

    @Get()
    getUser(@Query('limit', new DefaultValuePipe(10), ParseIntPipe)limit:number,
            @Query('page', new DefaultValuePipe(3),ParseIntPipe) page:number)
    {
        console.log(limit,page);
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserByID(@Param('id')id:string){
        return this.userService.getUserById(+id);
    }

    @Post()
    createUser(@Body()user:createUserDto){
        return 'A new user has been created';
    }
}

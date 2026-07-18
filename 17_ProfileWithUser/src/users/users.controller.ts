import { ValidationPipe, Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, Patch, ParseBoolPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDto } from "./dtos/create-user.dto";


@Controller('users')
export class UsersController {
    
    constructor(private usersService:UsersService){};

    //http://localhost:3000/users?limit=30&page=3
    @Get()
    getUsers() 
        {
            return this.usersService.getAllUsers();
        }

    @Post()
    async createUser(@Body() user: createUserDto) {
      return await this.usersService.createUser(user);
    }   

   
}
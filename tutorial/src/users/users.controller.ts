import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    @Get()
    getUsers(){
        const usersService=new UsersService();
        return usersService.getAllUsers();
    }
    
    @Post()
    createUser(){
        const user1 = {id:3,name:'Ronaldo',age:58, gender: 'Male', isMarried: false}
        const usersService=new UsersService();
        return usersService.createUser(user1);
    }
}
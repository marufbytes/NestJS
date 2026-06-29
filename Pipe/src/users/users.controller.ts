import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { retry } from "rxjs";

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService: UsersService) {};

    //http://localhost:3000/users?limit=30&page=3
    @Get()
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number, 
             @Query('page',new DefaultValuePipe(3), ParseIntPipe) page:number) {
                console.log(limit,page);
                return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserByID(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser() {
        const user1 = { id: 3, name: 'Ronaldo', age: 58, gender: 'Male', isMarried: false };
        const usersService = new UsersService();
        return usersService.createUser(user1);
    }
}
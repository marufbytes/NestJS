import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    //http://localhost:3000/user?gender=Female
    @Get()
    getUsers(@Query() query:any) {
        const usersService = new UsersService();
        if(query.gender){
            return usersService.getAllUsers().filter(u=>u.gender===query.gender);
        }
        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserByID(@Param('id') id: string) {
        const usersService = new UsersService();
        return usersService.getUserById(+id);
    }

    @Post()
    createUser() {
        const user1 = { id: 3, name: 'Ronaldo', age: 58, gender: 'Male', isMarried: false };
        const usersService = new UsersService();
        return usersService.createUser(user1);
    }
}
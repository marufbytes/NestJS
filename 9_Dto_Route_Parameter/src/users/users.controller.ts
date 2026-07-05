import { ValidationPipe, Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ParseBoolPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDto } from "./dtos/create-user.dto";

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService: UsersService) {};

    //http://localhost:3000/users?limit=30&page=3
    @Get(':isMarried')
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number, 
             @Query('page',new DefaultValuePipe(3), ParseIntPipe) page:number) 
             @Param('isMarried', ParseBoolPipe) isMarried:boolean
             {
                console.log(isMarried);
                return this.usersService.getAllUsers();
             }

    @Get(':id')
    getUserByID(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: createUserDto) {
        // this.usersService.createUser(user);
        
        return 'A new use has been created';
    }
}
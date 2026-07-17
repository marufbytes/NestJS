import { ValidationPipe, Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, Patch, ParseBoolPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDto } from "./dtos/create-user.dto";
import { GetuserPramDto } from "./dtos/get-user-param.dto";
import { UpdatUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService: UsersService) {};

    @Get(':isMarried')
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number, 
             @Query('page',new DefaultValuePipe(3), ParseIntPipe) page:number,
             @Param() param:GetuserPramDto
            ) 
            {
                console.log(param);
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

    @Patch()
    updateUser(@Body()user:UpdatUserDto){
        console.log(user)
        return 'User updated successfully'
    }
    // @Patch()   -------> if do not use map
    // updateUser(@Body()body:UpdatUserDto){
    //     console.log(body)
    // }

   
}
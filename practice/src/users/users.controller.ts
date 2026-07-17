import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':isMarried')
  getUsers()
          {
            return this.usersService.getAllUsers();
          }


 @Post()
 createUser(@Body() user:createUserDto){
  this.usersService.createUser(user);
 }
}


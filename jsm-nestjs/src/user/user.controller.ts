import { Body, Controller, Get, Param, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUsers(@Query('name') name?: string) {
        // 1. Define the mock data array first
        const users = [
            { id: 1, name: 'maruf' },
            { id: 2, name: 'jamal' }
        ];

        // 2. If a name query parameter is provided, filter the array
        if (name) {
            return users.filter(user => 
                user.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        // 3. If no name is provided, return all users
        return users;
    }

    @Get(':id')
    getUserById(@Param('id') id:string){
        return {id, name: 'Maruf'}
    }
}
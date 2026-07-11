import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(
        @Inject(forwardRef(() => UsersService)) 
        private readonly usersService: UsersService
    ) {}

    isAuthenticated:Boolean=false;

    login(email:string,pswd:string){
    const user = this.usersService.users.find(u => u.email === email && u.password === pswd);

        if (user){
            this.isAuthenticated=true;
            return 'MY_TOKEN';
        }

        return 'user not found';
    }
}

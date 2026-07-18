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
        return 'user not found';
    }
}

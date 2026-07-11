import { Injectable,Inject,forwardRef } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { time } from "console";

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService)) 
        private readonly authService: AuthService
    ) { }
    users: { id: number, name: string, email: string, gender: string, isMarried: boolean, password: string }[] = [
        { id: 1, name: 'john', email: 'john@gmail.com', gender: 'Male', isMarried: false, password: 'test1234' },
        { id: 2, name: 'Kobel', email: 'kobel@gmial.com', gender: 'Female', isMarried: true, password: 'test1234' },
        { id: 3, name: 'Messi', email: 'messi@gmail.com', gender: 'Male', isMarried: false, password: 'test1234' },
    ]

    getAllUsers() {
        if (this.authService.isAuthenticated) 
        {
            return this.users;
        }
        return 'Youre not logged in';
    }
    getUserById(id: Number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: { id: number; name: string; email: string; gender: string; isMarried: boolean; password: string }) {
        this.users.push(user);
        return "A new user has been created";
    }
}


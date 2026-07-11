import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    users: { id: number, name: string, email: string, gender: string, isMarried: boolean }[] = [
        { id: 1, name: 'john', email: 'john@gmail.com', gender: 'Male', isMarried: false },
        { id: 2, name: 'Kobel', email: 'kobel@gmial.com', gender: 'Female', isMarried: true },
        { id: 3, name: 'Messi', email: 'messi@gmail.com', gender: 'Male', isMarried: false },
    ]

    getAllUsers() {
        return this.users;
    }
    getUserById(id: Number) {
        return this.users.find(x => x.id === id);
    }
   
    createUser(user: { id: number; name: string; email: string; gender: string; isMarried: boolean }) {
        this.users.push(user);
        return "A new user has been created";
    }
}


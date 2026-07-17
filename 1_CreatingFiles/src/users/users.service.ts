

export class UsersService {
    
    users: { id: number, name: string, age: number, gender: string, isMarried: boolean }[] = [
        { id: 1, name: 'john', age: 28, gender: 'Male', isMarried: false },
        { id: 2, name: 'Kobel', age: 48, gender: 'Male', isMarried: true },
        { id: 3, name: 'Messi', age: 58, gender: 'Male', isMarried: false },
    ]

    getAllUsers() {
        return this.users;
    }
    getUserById(id: number) {
        return this.users.find(x => x.id === id);
    }
   
    createUser(user: { id: number; name: string; age: number; gender: string; isMarried: boolean }) {
        this.users.push(user);
        return "A new user has been created";
    }
}


import { Injectable, ConflictException } from "@nestjs/common"; // Added ConflictException
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { createUserDto } from "./dtos/create-user.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    getAllUsers() {
        return this.userRepository.find();
    }

    public async createUser(userDto: createUserDto) {
        // Validate if a user exists with the given email
        const existingUser = await this.userRepository.findOne({
             where: { email: userDto.email }
        });

        // Properly handle the conflict
        if (existingUser) {
            throw new ConflictException('A user with this email already exists');
        }

        // Create and save the new user
        const newUser = this.userRepository.create(userDto);
        return await this.userRepository.save(newUser);
    }
}
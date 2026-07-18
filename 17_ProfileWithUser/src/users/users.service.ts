import { Injectable, ConflictException } from "@nestjs/common"; // Added ConflictException
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { createUserDto } from "./dtos/create-user.dto";
import { Profile } from "../profile/profile.entity";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) { }



    getAllUsers() {
        return this.userRepository.find();
    }

    public async createUser(userDto: createUserDto) {
       //create a profile & save
       userDto.profile= userDto.profile?? {}
       let profile = this.profileRepository.create(userDto.profile);
       await this.profileRepository.save(profile);


       //create a user object
       let user = this.userRepository.create(userDto);


       //set the profile
       user.profile=profile;

       //save the user object
       return await this.userRepository.save(user);
    }
}
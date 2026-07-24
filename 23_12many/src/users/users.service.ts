import { Injectable, ConflictException, NotFoundException, BadRequestException } from "@nestjs/common"; // Added ConflictException
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
        return this.userRepository.find({
            relations:{               //--->Fetch the profile details also
                profile:true,
            }
        });
    }

    public async createUser(userDto: createUserDto) {
       userDto.profile= userDto.profile?? {}

       let user = this.userRepository.create(userDto);;

       return await this.userRepository.save(user);
    }

    public async deleteUser(id:number){
        await this.userRepository.delete(id);
        return {delete:true}
    }

}
import { Inject, Injectable } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';
import { AuthService } from '../auth/auth.service';
import { Repository } from 'typeorm';
import { Practice } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Practice)
        private userRepository:Repository<Practice>){}


    getAllUsers() {

    }

    public async createUser(userDto:createUserDto) {
       const user = await this.userRepository.findOne({
        where:{email:userDto.email}
       })

       if(user){
        return 'User already exist';
       }

       let newUser=this.userRepository.create(userDto);
       newUser= await this.userRepository.save(newUser);
       return newUser;
    }
}

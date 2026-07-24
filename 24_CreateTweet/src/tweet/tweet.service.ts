import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetService {

    constructor(private readonly usersService:UsersService,
                @InjectRepository(Tweet) private readonly tweetRepository:Repository<Tweet>
    ){}
    getTweets(userId:Number){

     }

     public async CreateTweet(createTweetDto:CreateTweetDto){
        //Find the user with the given userid from user table
        let user= await this.usersService.FinduserById(createTweetDto.userId)
        if(!user) throw new NotFoundException();

        //create tweet
        let tweet = this.tweetRepository.create({...createTweetDto,user:user})

        //save tweet
        return await this.tweetRepository.save(tweet);
     }

}

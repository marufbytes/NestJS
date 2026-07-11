import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class TweetService {

    constructor(private readonly usersService:UsersService){}

    tweets:{text:String, date:Date, userId:Number}[]=[
        {text:'some tweet',date:new Date('2024-12-11'),userId:1},
        {text:'second tweet',date:new Date('2024-12-11'),userId:1},
        {text:'second tweet',date:new Date('2024-12-11'),userId:2},
    ]

    getTweets(userId:Number){
        const user = this.usersService.getUserById(userId);
        const tweets = this.tweets.filter(t=>t.userId === userId);
        const response = tweets.map(t => {return {text:t.text, date:t.date,name:user?.name}})
        return response
    }

}

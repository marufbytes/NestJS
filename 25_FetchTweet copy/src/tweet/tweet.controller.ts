import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Controller('tweet')
export class TweetController {
    constructor (private tweetService:TweetService){}  //Intra modular dependency cz depends on service class in the same module

    //http://localhost:3000/tweet/101
    @Get(':userid')
    public GetTweets(@Param('userid', ParseIntPipe)userid:number){
        return this.tweetService.getTweets(userid);
    }

    @Post()
    public CreateTweetDto(@Body() tweet:CreateTweetDto){
        return this.tweetService.CreateTweet(tweet);
    }
}

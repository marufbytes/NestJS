import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports:[UsersModule]
})
export class TweetModule {}

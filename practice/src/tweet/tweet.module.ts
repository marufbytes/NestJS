import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports:[UsersModule],
})
export class TweetModule {}

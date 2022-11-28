import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://root:password@127.0.0.1:27017/?authMechanism=DEFAULT')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

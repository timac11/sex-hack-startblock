import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersService } from './service/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'GrIdentityProvider',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User
    ])
  ],
  exports: [
    UsersService
  ],
  providers: [
    UsersService
  ]
})
export class StorageModule {}
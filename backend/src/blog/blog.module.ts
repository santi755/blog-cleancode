import { Module } from '@nestjs/common';
import { PostsController } from './presentation/controllers/posts/posts.controller';
import { PostsService } from './application/services/posts/posts.service';
import { TypeOrmPostsRepository } from './infrastructure/repositories/posts/typeOrmPosts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './domain/entities/posts/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [
    {
      provide: 'PostsRepository',
      useClass: TypeOrmPostsRepository,
    },
    PostsService,
  ],
  controllers: [PostsController],
})
export class BlogModule {}

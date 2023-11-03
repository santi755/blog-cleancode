import { Module } from '@nestjs/common';
import { PostsController } from './presentation/controllers/post/post.controller';
import { PostsService } from './application/services/post/posts.service';
import { TypeOrmPostRepository } from './infrastructure/repositories/post/typeOrmPost.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './domain/entities/post/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [
    {
      provide: 'PostRepository',
      useClass: TypeOrmPostRepository,
    },
    PostsService,
  ],
  controllers: [PostsController],
})
export class BlogModule {}

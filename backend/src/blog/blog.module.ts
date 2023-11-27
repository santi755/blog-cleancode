import { Module } from '@nestjs/common';
import { TypeOrmPostsRepository } from './posts/infrastructure/persistence/typeorm/repositories/TypeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './comments/infrastructure/persistence/typeorm/repositories/TypeOrmComments.repository';
import CreatePosts from './posts/application/use-cases/CreatePosts.usecase';
import EditPosts from './posts/application/use-cases/EditPosts.usecase';
import EliminatePosts from './posts/application/use-cases/EliminatePosts.usecase';
import SearchPosts from './posts/application/use-cases/SearchPosts.usecase';
import SearchComments from './comments/application/use-cases/SearchComments.usecase';
import CreateComments from './comments/application/use-cases/CreateComments.usecase';

// Comments Use Cases
import PostCommentController from './comments/infrastructure/nestjs/controllers/PostComment.controller';
import GetCommentController from './comments/infrastructure/nestjs/controllers/GetComment.controller';

// Posts Use Cases
import PostPostController from './posts/infrastructure/nestjs/controllers/PostPost.controller';
import PatchPostController from './posts/infrastructure/nestjs/controllers/PatchPost.controller';
import GetPostController from './posts/infrastructure/nestjs/controllers/GetPost.controller';
import DeletePostController from './posts/infrastructure/nestjs/controllers/DeletePost.controller';

@Module({
  providers: [
    {
      provide: 'PostsRepository',
      useClass: TypeOrmPostsRepository,
    },
    {
      provide: 'CommentsRepository',
      useClass: TypeOrmCommentsRepository,
    },
    CreatePosts,
    EditPosts,
    EliminatePosts,
    SearchPosts,
    SearchComments,
    CreateComments,
  ],
  controllers: [
    PostPostController,
    PatchPostController,
    GetPostController,
    DeletePostController,
    PostCommentController,
    GetCommentController,
  ],
})
export class BlogModule {}

import { Module } from '@nestjs/common';
import { TypeOrmPostsRepository } from './posts/infrastructure/repositories/TypeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './comments/infrastructure/repositories/TypeOrmComments.repository';
import CreatePosts from './posts/application/use-cases/CreatePosts.usecase';
import EditPosts from './posts/application/use-cases/EditPosts.usecase';
import EliminatePosts from './posts/application/use-cases/EliminatePosts.usecase';
import SearchPosts from './posts/application/use-cases/SearchPosts.usecase';
import SearchComments from './comments/application/use-cases/SearchComments.usecase';
import CreateComments from './comments/application/use-cases/CreateComments.usecase';

// Comments Use Cases
import CreateCommentsController from './comments/infrastructure/nestjs/controllers/PostComment.controller';
import SearchCommentsController from './comments/infrastructure/nestjs/controllers/GetComment.controller';

// Posts Use Cases
import CreatePostsController from './posts/infrastructure/nestjs/controllers/PostPost.controller';
import EditPostsController from './posts/infrastructure/nestjs/controllers/PatchPost.controller';
import SearchPostsController from './posts/infrastructure/nestjs/controllers/GetPost.controller';
import EliminatePostsController from './posts/infrastructure/nestjs/controllers/DeletePost.controller';

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
    CreatePostsController,
    EditPostsController,
    SearchPostsController,
    EliminatePostsController,
    CreateCommentsController,
    SearchCommentsController,
  ],
})
export class BlogModule {}

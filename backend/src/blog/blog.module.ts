import { Module } from '@nestjs/common';
import { TypeOrmPostsRepository } from './posts/infrastructure/persistence/typeorm/repositories/TypeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './comments/infrastructure/persistence/typeorm/repositories/TypeOrmComments.repository';

// Posts Use Cases
import CreatePosts from './posts/application/use-cases/CreatePosts.usecase';
import EditPosts from './posts/application/use-cases/EditPosts.usecase';
import EliminatePosts from './posts/application/use-cases/EliminatePosts.usecase';
import SearchPosts from './posts/application/use-cases/SearchPosts.usecase';
import AddCommentToPost from './posts/application/use-cases/AddCommentToPost.usecase';

// Posts Controllers
import PostPostController from './posts/infrastructure/nestjs/controllers/PostPost.controller';
import PatchPostController from './posts/infrastructure/nestjs/controllers/PatchPost.controller';
import GetPostController from './posts/infrastructure/nestjs/controllers/GetPost.controller';
import DeletePostController from './posts/infrastructure/nestjs/controllers/DeletePost.controller';
import PostCommentController from './posts/infrastructure/nestjs/controllers/PostComment.controller';

@Module({
  providers: [
    {
      provide: 'PostRepository',
      useClass: TypeOrmPostsRepository,
    },
    {
      provide: 'CommentRepository',
      useClass: TypeOrmCommentsRepository,
    },
    CreatePosts,
    EditPosts,
    EliminatePosts,
    SearchPosts,
    AddCommentToPost,
  ],
  controllers: [
    PostPostController,
    PatchPostController,
    GetPostController,
    DeletePostController,
    PostCommentController,
  ],
})
export class BlogModule {}

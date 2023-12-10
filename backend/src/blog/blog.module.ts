import { Module } from '@nestjs/common';

// Posts persistence
import { TypeOrmPostsRepository } from './posts/infrastructure/persistence/typeorm/repositories/TypeOrmPosts.repository';

// Comments persistence
import { TypeOrmCommentsRepository } from './comments/infrastructure/persistence/typeorm/repositories/TypeOrmComments.repository';

// Categories persistence
import { TypeOrmCategoriesRepository } from './categories/infrastructure/persistence/typeorm/repositories/TypeOrmCategories.repository';

// Posts Use Cases
import CreatePosts from './posts/application/use-cases/CreatePosts.usecase';
import EditPosts from './posts/application/use-cases/EditPosts.usecase';
import EliminatePosts from './posts/application/use-cases/EliminatePosts.usecase';
import SearchPosts from './posts/application/use-cases/SearchPosts.usecase';
import AddComment from './comments/application/use-cases/AddComment.usecase';

// Posts Controllers
import PostPostController from './posts/infrastructure/nestjs/controllers/PostPost.controller';
import PatchPostController from './posts/infrastructure/nestjs/controllers/PatchPost.controller';
import GetPostController from './posts/infrastructure/nestjs/controllers/GetPost.controller';
import DeletePostController from './posts/infrastructure/nestjs/controllers/DeletePost.controller';

// Comments Controllers
import PostCommentController from './comments/infrastructure/nestjs/controllers/PostComment.controller';

// Categories controllers
import PostCategoryController from './categories/infrastructure/nestjs/controllers/PostCategory.controller';

// Categories Use Cases
import CreateCategory from './categories/application/use-cases/CreateCategory.usecase';

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
    {
      provide: 'CategoryRepository',
      useClass: TypeOrmCategoriesRepository,
    },
    CreatePosts,
    EditPosts,
    EliminatePosts,
    SearchPosts,
    AddComment,
    CreateCategory,
  ],
  controllers: [
    PostPostController,
    PatchPostController,
    GetPostController,
    DeletePostController,
    PostCommentController,
    PostCategoryController,
  ],
})
export class BlogModule {}

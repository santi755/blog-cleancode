import { Module } from '@nestjs/common';
import { TypeOrmPostsRepository } from './posts/infrastructure/repositories/TypeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './comments/infrastructure/repositories/TypeOrmComments.repository';
import { CreatePostsService } from './posts/application/services/create-posts/CreatePosts.service';
import { EditPostsService } from './posts/application/services/edit-posts/EditPosts.service';
import { SearchPostsService } from './posts/application/services/search-posts/SearchPosts.service';
import { EliminatePostsService } from './posts/application/services/eliminate-posts/EliminatePosts.service';
import { SearchCommentsService } from './comments/application/services/search-comments/SearchComments.service';
import { CreateCommentsService } from './comments/application/services/create-comments/CreateComments.service';

// Comments Use Cases
import { CreateCommentsController } from './comments/presentation/CreateComments.controller';
import { SearchCommentsController } from './comments/presentation/SearchComments.controller';

// Posts Use Cases
import { CreatePostsController } from './posts/presentation/CreatePosts.controller';
import { EditPostsController } from './posts/presentation/EditPosts.controller';
import { SearchPostsController } from './posts/presentation/SearchPosts.controller';
import { EliminatePostsController } from './posts/presentation/EliminatePosts.controller';

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
    CreatePostsService,
    EditPostsService,
    SearchPostsService,
    EliminatePostsService,
    SearchCommentsService,
    CreateCommentsService,
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

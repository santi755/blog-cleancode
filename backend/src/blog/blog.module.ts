import { Module } from '@nestjs/common';
import { TypeOrmPostsRepository } from './posts/infrastructure/repositories/typeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './comments/infrastructure/repositories/typeOrmComments.repository';
import { CreatePostsService } from './posts/application/services/create-posts/CreatePosts.service';
import { EditPostsService } from './posts/application/services/edit-posts/EditPosts.service';
import { SearchPostsService } from './posts/application/services/search-posts/SearchPosts.service';
import { EliminatePostsService } from './posts/application/services/eliminate-posts/EliminatePosts.service';
import { SearchCommentsService } from './comments/application/services/search-comments/SearchComments.service';
import { CreateCommentsService } from './comments/application/services/create-comments/CreateComments.service';

// Comments Use Cases
import { CommentsController } from './comments/presentation/comments.controller';

// Posts Use Cases
import { CreatePostsController } from './posts/presentation/createPosts.controller';
import { EditPostsController } from './posts/presentation/editPosts.controller';
import { SearchPostsController } from './posts/presentation/searchPosts.controller';
import { EliminatePostsController } from './posts/presentation/eliminatePosts.controller';

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
    CommentsController,
  ],
})
export class BlogModule {}

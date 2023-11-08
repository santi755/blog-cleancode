import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreatePostsService } from 'src/blog/posts/application/services/create-posts/CreatePosts.service';
import { EditPostsService } from 'src/blog/posts/application/services/edit-posts/EditPosts.service';
import { SearchPostsService } from 'src/blog/posts/application/services/search-posts/SearchPosts.service';
import { EliminatePostsService } from 'src/blog/posts/application/services/eliminate-posts/EliminatePosts.service';

import { Posts } from 'src/blog/posts/domain/entities/posts.entity';
import { CreatePostsDto } from 'src/blog/posts/domain/dtos/createPosts.dto';
import { EditPostsDto } from 'src/blog/posts/domain/dtos/editPosts.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly createPostsService: CreatePostsService,
    private readonly editPostsService: EditPostsService,
    private readonly searchPostsService: SearchPostsService,
    private readonly eliminatePostsService: EliminatePostsService,
  ) {}

  @Get(':postId')
  async getPostById(@Param('postId') postId: string): Promise<Posts> {
    return await this.searchPostsService.search(postId);
  }

  @Post()
  async createPost(@Body() createPostsDto: CreatePostsDto): Promise<Posts> {
    try {
      return await this.createPostsService.create(createPostsDto);
    } catch (error) {
      return error;
    }
  }

  @Patch(':postId')
  async editPost(
    @Param('postId') postsId: string,
    @Body() editPostsDto: EditPostsDto,
  ): Promise<Posts> {
    try {
      return await this.editPostsService.edit({
        id: postsId,
        ...editPostsDto,
      });
    } catch (error) {
      return error;
    }
  }

  @Delete(':postId')
  async eliminatePost(@Param('postId') postId: string): Promise<void> {
    try {
      return await this.eliminatePostsService.eliminate(postId);
    } catch (error) {
      return error;
    }
  }
}

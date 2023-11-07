import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { CreatePostsService } from 'src/bounded-contexts/blog/application/services/posts/create-posts/create-posts.service';
import { EditPostsService } from 'src/bounded-contexts/blog/application/services/posts/edit-posts/edit-posts.service';
import { SearchPostsService } from 'src/bounded-contexts/blog/application/services/posts/search-posts/search-posts.service';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { CreatePostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/createPosts.dto';
import { EditPostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/editPosts.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly createPostsService: CreatePostsService,
    private readonly editPostsService: EditPostsService,
    private readonly searchPostsService: SearchPostsService,
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
}

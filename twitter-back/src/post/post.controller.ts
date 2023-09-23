import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Post as PostModel } from "@prisma/client";

import { PostDTO } from "./post.dto";
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    getPosts(): Promise<PostModel[]> {
        return this.postService.getPosts();
    }

    @Get(':authorId')
    getUserPosts(@Param('authorId')  authorId?: string): Promise<PostModel[]> {
        return this.postService.getUserPosts(authorId);
    }

    @Post()
    savePost(@Body() post: PostDTO): { message: string } {
        try {
            this.postService.savePost(post as unknown as PostModel);
            return { message: 'Post created successfully' };
        } catch (error) {
            throw new Error(error);
        }
    }

    @Put(':id')
    editPost(@Param('id') id: number, @Body() post: PostModel): { message: string } {
      try {
          this.postService.editPost(id, post);
          return { message: 'Post edited successfully' };
      }  catch (error) {
          throw new Error(error);
      }
    }

    @Delete(':id')
    deletePost(@Param('id') id: number): { message: string } {
        try {
            this.postService.deletePost(id);
            return { message: 'Post deleted successfully' };
        } catch (error) {
            throw new Error(error);
        }
    }
}

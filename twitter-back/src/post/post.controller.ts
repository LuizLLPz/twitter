import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { response } from "express";
import { Post as PostModel } from "@prisma/client";

import { PostService } from './post.service';


@Controller()
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('post')
    getPosts(): Promise<PostModel[]> {
        return this.postService.getPosts();
    }

    @Get('post?userId=:id')
    getUserPosts(@Param('authorId') authorId?: number): Promise<PostModel[]> {
        return this.postService.getUserPosts(authorId);
    }

    @Post('post')
    savePost(@Body() post: PostModel): { message: string } {
        try {
            this.postService.savePost(post);
            return { message: 'Post created successfully' };
        } catch (error) {
            throw new Error(error);
        }
    }

    @Put('post/:id')
    editPost(@Param('id') id: number, @Body() post: PostModel): { message: string } {
      try {
          this.postService.editPost(id, post);
          return { message: 'Post edited successfully' };
      }  catch (error) {
          throw new Error(error);
      }
    }

    @Delete('post/:id')
    deletePost(@Param('id') id: number): { message: string } {
        try {
            this.postService.deletePost(id);
            return { message: 'Post deleted successfully' };
        } catch (error) {
            throw new Error(error);
        }
    }
}

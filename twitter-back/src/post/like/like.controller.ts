import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query} from '@nestjs/common';
import { Like as LikeModel } from "@prisma/client";

import { LikeDTO } from "./like.dto";
import { LikeService } from './like.service';

@Controller('post/like')
export class LikeController {
    constructor(private readonly likeService: LikeService) {}

    @Get(':postId')
    getPostLikes(@Param('postId', ParseIntPipe) postId: number) {
        return this.likeService.getPostLikes(postId);
    }

    @Post()
    savePostLike(@Body() like: LikeDTO): { message: string } {
        try {
            this.likeService.savePostLike(like as unknown as LikeModel);
            return { message: 'Like submitted successfully!' };
        } catch (error) {
            throw new Error(error);
        }
    }

    @Delete()
    deletePostLike(@Query('userId', ParseIntPipe) userId: number, @Query('postId', ParseIntPipe) postId: number): { message: string } {
        try {
            this.likeService.deletePostLike({userId, postId});
            return { message: 'Like removed successfully!' };
        } catch (error) {
            throw new Error(error);
        }
    }
}

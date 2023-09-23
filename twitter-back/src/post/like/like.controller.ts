import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { Like as LikeModel } from "@prisma/client";

import { LikeDTO } from "./like.dto";
import { LikeService } from './like.service';

@Controller('post/like')
export class LikeController {
    constructor(private readonly likeService: LikeService) {}
    @Post()
    savePostLike(@Body() like: LikeDTO): { message: string } {
        try {
            this.likeService.savePostLike(like as unknown as LikeModel);
            return { message: 'Like submitted successfully!' };
        } catch (error) {
            throw new Error(error);
        }
    }

    @Delete(':id')
    deletePostLike(@Param('userId') userId: number, @Param('postId') postId: number): { message: string } {
        try {
            this.likeService.deletePostLike({userId, postId});
            return { message: 'Like removed successfully!' };
        } catch (error) {
            throw new Error(error);
        }
    }
}

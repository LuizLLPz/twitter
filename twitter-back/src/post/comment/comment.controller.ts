import {Body, Controller, Delete, Param, ParseIntPipe, Post} from '@nestjs/common';
import { Comment as CommentModel } from "@prisma/client";

import { CommentDTO } from "./comment.dto";
import { CommentService } from './comment.service';

@Controller('post/like')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}
    @Post()
    savePostLike(@Body() comment: CommentDTO): { message: string } {
        try {
            this.commentService.savePostComment(comment as unknown as CommentModel);
            return { message: 'Like submitted successfully!' };
        } catch (error) {
            throw new Error(error);
        }
    }

    @Delete(':id')
    deletePostLike(@Param('userId', ParseIntPipe) userId: number, @Param('postId', ParseIntPipe) postId: number): { message: string } {
        try {
            this.commentService.deletePostComment({userId, postId});
            return { message: 'Like removed successfully!' };
        } catch (error) {
            throw new Error(error);
        }
    }
}

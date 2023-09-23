import { Comment } from "@prisma/client";
import { Injectable } from '@nestjs/common';

import { PrismaService } from "../../prisma.service";
import { CommentDTO } from "./comment.dto";


@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) {
    }

    async savePostComment(data: Comment){
        await this.prisma.like.create({data})
    }

    async deletePostComment(data: CommentDTO) {
        await this.prisma.like.deleteMany({
            where: {
                postId: data.postId as number,
                userId: data.userId as number
            }
        })
    }
}

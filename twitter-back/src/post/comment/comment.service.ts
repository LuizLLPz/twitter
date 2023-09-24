import { Comment } from "@prisma/client";
import { Injectable } from '@nestjs/common';

import { PrismaService } from "../../prisma.service";
import { CommentDTO } from "./comment.dto";


@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) {
    }

    getPostComments(postId: number) {
        return this.prisma.comment.findMany({
            where: {
                postId
            },
            select: {
                id: true,
                text: true,
                authorId: true,
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true
                    }
                }
            }
        })
    }

    async savePostComment(data: Comment){
        await this.prisma.comment.create({data})
    }

    async deletePostComment(data: CommentDTO) {
        await this.prisma.like.deleteMany({
            where: {
                postId: data.postId as number,
                userId: data.authorId as number
            }
        })
    }
}

import { Injectable } from '@nestjs/common';
import { Like } from "@prisma/client";

import { PrismaService } from "../../prisma.service";
import { LikeDTO } from "./like.dto";


@Injectable()
export class LikeService {
    constructor(private prisma: PrismaService) {
    }

    getPostLikes(postId: number) {
        return this.prisma.like.findMany({
            where: { postId } ,
            select: {
                id: true,
                post: true,
                postId: true,
                userId: true,
                User: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                }
            }
        })
    }

    async savePostLike(data: Like){
        await this.prisma.like.create({data})
    }

    async deletePostLike(data: LikeDTO) {
        await this.prisma.like.deleteMany({
            where: {
                postId: data.postId as number,
                userId: data.userId as number
            }
        })
    }
}

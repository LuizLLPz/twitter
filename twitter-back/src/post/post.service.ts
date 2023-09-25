import { Injectable } from '@nestjs/common';
import { Post } from "@prisma/client";

import { PrismaService } from "../prisma.service";


@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {
    }

    getPosts() {
        return this.prisma.post.findMany({
            select: {
                title: true,
                author: true
            },
            orderBy: {
                id: 'desc'
            }
        });
    }

    getUserPosts(authorId: string): Promise<Post[]> {
        return this.prisma.post.findMany({
            where: {
                authorId: Number.parseInt(authorId)
            }
        })
    }
    async savePost(data: Post) {
        await this.prisma.post.create({
            data
        })
    }

    async editPost(id: number, data: Post) {
        await this.prisma.post.update({
            where: {
                id
            },
            data
        })
    }

    async deletePost(id: number) {
        await this.prisma.post.delete({
            where: {
                id
            }
        })
    }
}

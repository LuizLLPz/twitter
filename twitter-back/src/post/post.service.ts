import { Injectable } from '@nestjs/common';
import { Post } from "@prisma/client";

import { PrismaService } from "../prisma.service";


@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}
    getPosts(): Promise<Post[]> {
        return this.prisma.post.findMany();
    }

    getUserPosts(authorId: number): Promise<Post[]> {
        return this.prisma.post.findMany({
            where: {
                authorId
            }
        })
    }

    savePost(data: Post): void {
        this.prisma.post.create({
            data
        })
    }

    editPost(id: number, data: Post): void {
        this.prisma.post.update({
            where: {
                id
            },
            data
        })
    }

    deletePost(id: number): void {
        this.prisma.post.delete({
            where: {
                id
            }
        })
    }

}

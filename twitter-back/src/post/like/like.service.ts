import { Injectable } from '@nestjs/common';
import { Like } from "@prisma/client";

import { PrismaService } from "../../prisma.service";
import {LikeDTO} from "./like.dto";


@Injectable()
export class LikeService {
    constructor(private prisma: PrismaService) {
    }

    savePostLike(data: Like): void{
        this.prisma.like.create({data})
    }

    deletePostLike(data: LikeDTO): void {
        this.prisma.like.deleteMany({
            where: {
                postId: data.postId as number,
                userId: data.userId as number
            }
        })
    }
}

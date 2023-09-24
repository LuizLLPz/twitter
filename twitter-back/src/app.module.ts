import { Module } from '@nestjs/common';

import { LikeController } from "./post/like/like.controller";
import { LikeService } from "./post/like/like.service";
import { PerfilController } from './perfil/perfil.controller';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma.service';
import {CommentController} from "./post/comment/comment.controller";
import {CommentService} from "./post/comment/comment.service";

@Module({
  imports: [],
  controllers: [PostController, LikeController, PerfilController, CommentController],
  providers: [PostService, LikeService, PrismaService, CommentService],
})
export class AppModule {}

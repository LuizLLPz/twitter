import { Module } from '@nestjs/common';

import { LikeController } from "./post/like/like.controller";
import { LikeService } from "./post/like/like.service";
import { PerfilController } from './perfil/perfil.controller';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [PostController, LikeController, PerfilController],
  providers: [PostService, LikeService, PrismaService],
})
export class AppModule {}

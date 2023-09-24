import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilController } from './perfil/perfil.controller';
import { PostController } from './post/post.controller';
import { PrismaService } from './prisma.service';
import { PostService } from './post/post.service';
import { PerfilService } from './perfil/perfil.service';

@Module({
  imports: [],
  controllers: [AppController, PostController, PerfilController],
  providers: [AppService, PostService, PrismaService, PerfilService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilController } from './perfil/perfil.controller';

@Module({
  imports: [],
  controllers: [AppController, PerfilController],
  providers: [AppService],
})
export class AppModule {}

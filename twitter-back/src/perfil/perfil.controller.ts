import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
  IUsuarioCadastro,
  IUsuarioLogin,
  Idata,
  PerfilService,
} from './perfil.service';

@Controller('')
export class PerfilController {
  constructor(private readonly postService: PerfilService) {}

  @Get('login')
  async getUsuario(
    // @Param('email') email: string,
    // @Param('password') password: string,
    @Query() params: any,
  ): Promise<Idata> {
    const { email, password } = params;
    return this.postService.getUsuarioLogin(email, password);
  }

  @Get('profile/:number/:username')
  getUsuarioById(@Param() params: any): Promise<Idata> {
    const { number, username } = params;
    return this.postService.getUsuario(number, username);
  }

  @Post('profile')
  async createUsuario(
    @Body() usuario: IUsuarioCadastro,
  ): Promise<Idata | null> {
    return this.postService.createUsuario(usuario);
  }
}

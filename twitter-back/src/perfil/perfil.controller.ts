import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  async getUsuario(@Body() userInfo: IUsuarioLogin): Promise<Idata> {
    const { email, password } = userInfo;
    return this.postService.getUsuarioLogin(email, password);
  }

  @Get('perfil/:number/:username')
  getUsuarioById(@Param() params: any): Promise<Idata> {
    const { number, username } = params;
    return this.postService.getUsuario(number, username);
  }

  @Post('perfil')
  async createUsuario(
    @Body() usuario: IUsuarioCadastro,
  ): Promise<Idata | null> {
    return this.postService.createUsuario(usuario);
  }
}

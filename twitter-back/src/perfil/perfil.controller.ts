import { Controller, Get } from '@nestjs/common';

@Controller('')
export class PerfilController {
  @Get('perfil')
  ola(): string {
    return 'Pegar perfil';
  }
}

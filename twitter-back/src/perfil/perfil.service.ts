import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma.service';

export interface IUsuario {
  name: string;
  username: string;
  email: string;
  number: Decimal;
}

export interface IUsuarioCadastro extends IUsuario {
  password: string;
  createdAt: Date;
}

export interface IUsuarioLogin extends IUsuario {
  password: string;
  email: string;
}

export interface Idata {
  data: any | IUsuario;
  mensage: string;
}

@Injectable()
export class PerfilService {
  constructor(private prisma: PrismaService) {}

  async getUsuarioLogin(email: string, password: string): Promise<Idata> {
    if (email === undefined || password === undefined) {
      return { data: false, mensage: 'Usuario não encontrado!' };
    }
    if (email === '' || password === '') {
      return { data: false, mensage: 'Usuario não encontrado!' };
    }
    if (email === null || password === null) {
      return { data: false, mensage: 'Usuario não encontrado!' };
    }
    try {
      const info = await this.prisma.user.findMany({
        select: {
          number: true,
          username: true,
          name: true,
          email: true,
        },
        where: {
          email: email,
          password: password,
        },
      });
      console.log(info[0]);
      if (info[0] !== undefined) {
        return { data: info[0] as IUsuario, mensage: 'Usuario encontrado!' };
      } else {
        return { data: false, mensage: 'Usuario não encontrado!' };
      }
    } catch (error) {
      return { data: false, mensage: 'Erro ao buscar usuario!' };
    }
  }

  async getUsuario(number: number, username: string): Promise<Idata> {
    try {
      const info = await this.prisma.user.findMany({
        select: {
          number: true,
          name: true,
          email: true,
          username: true,
        },
        where: {
          number: number,
          username: username,
        },
      });
      return { data: info[0] as IUsuario, mensage: 'Usuario encontrado!' };
    } catch (error) {
      return { data: false, mensage: 'Erro ao buscar usuario!' };
    }
  }

  async createUsuario(usuario: IUsuarioCadastro): Promise<Idata | null> {
    const float: number = Math.random() * 1000000000;
    const number: number = Math.floor(float);
    const createdAt: Date = new Date();

    try {
      await this.prisma.user.create({
        data: {
          createdAt: createdAt,
          username: usuario.username,
          password: usuario.password,
          number: number,
          name: usuario.name,
          email: usuario.email,
        },
      });
    } catch (error) {
      return { data: false, mensage: 'Erro ao criar usuario!' };
    }
    return { data: true, mensage: 'Usuario criado com sucesso!' };
  }
}

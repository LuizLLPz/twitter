import { IsNotEmpty, IsNumber } from 'class-validator'
export class LikeDTO {
    @IsNumber({},{message: 'A id de usuário deve ser um número'})
    @IsNotEmpty({message: 'Por favor informe a id do usuário!'})
    userId: Number;

    @IsNumber({},{message: 'A id da postagem deve ser um número'})
    @IsNotEmpty({message: 'Por favor informe a id da postagem!'})
    postId: Number;
}
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
export class CommentDTO {
    @IsNumber({},{message: 'A id de usuário deve ser um número'})
    @IsNotEmpty({message: 'Por favor informe a id do usuário!'})
    userId: Number;

    @IsNumber({},{message: 'A id da postagem deve ser um número'})
    @IsNotEmpty({message: 'Por favor informe a id da postagem!'})
    postId: Number;

    @IsString({message: 'A texto da postagem deve ser string'})
    @IsNotEmpty({message: 'Por favor informe o texto!'})
    text?: Number;
}
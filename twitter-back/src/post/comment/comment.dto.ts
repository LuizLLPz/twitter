import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
export class CommentDTO {
    @IsNumber({},{message: 'A id do autor deve ser um número'})
    @IsNotEmpty({message: 'Por favor informe a id do autor!'})
    authorId: Number;

    @IsNumber({},{message: 'A id da postagem deve ser um número'})
    @IsNotEmpty({message: 'Por favor informe a id da postagem!'})
    postId: Number;

    @IsString({message: 'A texto da postagem deve ser string'})
    @IsNotEmpty({message: 'Por favor informe o texto!'})
    text?: Number;
}
import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';


@Controller()
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('post')
    getPosts() {
        return this.postService.getPosts();
    }
}

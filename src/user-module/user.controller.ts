import { Controller, Get, Post } from '@nestjs/common';

// eslint-disable-next-line prettier/prettier
@Controller('user')
export class UserController {
  @Get()
  getUser(): string {
    return 'hello';
  }

  @Post()
  getPost(): string {
    return 'Hello Post';
  }
}

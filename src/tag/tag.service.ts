import { Injectable } from '@nestjs/common';

@Injectable()
export default class TagService {
  findAll(): string[] {
    return ['a', 'b', 'c'];
  }
}

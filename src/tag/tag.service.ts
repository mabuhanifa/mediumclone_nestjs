import { Injectable } from '@nestjs/common';

@Injectable()
export default class TagService {
  findAll() {
    return ['a', 'b'];
  }
}

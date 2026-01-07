import { PartialType } from '@nestjs/mapped-types';
import { NewUserBookDto } from './new-user-book.dto';

export class UpdateUserBookDto extends PartialType(NewUserBookDto) {
  status?: string;
}

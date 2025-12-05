import { PartialType } from '@nestjs/mapped-types';
import { NewUserDTO } from './new-user.dto';

export class UpdateUserDTO extends PartialType(NewUserDTO) {
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  avatar?: string | undefined;
  isPrivate?: boolean | undefined;
}

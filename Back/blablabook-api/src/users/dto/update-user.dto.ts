import { PartialType } from '@nestjs/mapped-types';
import { NewUserDTO } from './new-user.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateUserDTO extends PartialType(
  OmitType(NewUserDTO, ['roleId'] as const),
) {
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  avatar?: string | undefined;
  isPrivate?: boolean | undefined;
  description?: string | undefined;
  profilePicture?: string | undefined;
}

import { ApiProperty } from '@nestjs/swagger';

export class NewUserDTO {
  @ApiProperty()
  public username: string;
  @ApiProperty()
  public email: string;
  @ApiProperty()
  public password: string;
  @ApiProperty({
    description: 'Indicates if the user profile is private',
  })
  public isPrivate: boolean;
  @ApiProperty({
    description: 'The role ID of the user',
    required: false,
  })
  public roleId: number;
  @ApiProperty({
    description: 'The avatar image of the user',
    required: false,
  })
  public avatar?: string;
}

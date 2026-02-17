import { ApiProperty } from '@nestjs/swagger';

export class NewUserBookDto {
  @ApiProperty({
    description: 'Indicates the reading status of the book',
  })
  public status: string;
  @ApiProperty({
    description: 'The Id of the user',
    required: true,
  })
  public userId: number;
  @ApiProperty({
    description: 'The id of the book',
    required: true,
  })
  public bookId: number;
}

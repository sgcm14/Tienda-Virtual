import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}

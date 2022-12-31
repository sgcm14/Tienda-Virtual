import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}

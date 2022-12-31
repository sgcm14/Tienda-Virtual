import { ApiProperty } from '@nestjs/swagger';

export class FindNoteDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}

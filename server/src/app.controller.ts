import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('us')
  getUsInfo(): string {
    return 'PET SHOP es una tienda virtual, aquí te vas a encontrar muchísima variedad de productos para tu mascota.';
  }
}

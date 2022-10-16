import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetProducts } from './products/products.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts(): GetProducts[] {
    return this.appService.getProducts();
  }
}

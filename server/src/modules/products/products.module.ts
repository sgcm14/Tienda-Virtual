import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { CompraDetail } from './entities/compra_detail.entity';
// import { AuthenticationModule } from '../authentication/authentication.module';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Compra, CompraDetail])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}

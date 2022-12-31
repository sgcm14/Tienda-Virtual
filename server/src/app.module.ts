import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// import { NotesModule } from './modules/notes/notes.module';
import { Account } from './modules/accounts/entities/account.entity';
// import { Note } from './modules/notes/entities/note.entity';
// import { AuthenticationModule } from './modules/authentication/authentication.module';
import { Product } from './modules/products/entities/product.entity';
import { ProductsModule } from './modules/products/products.module';
import { AppController } from './app.controller';
import { Compra } from './modules/products/entities/compra.entity';
import { CompraDetail } from './modules/products/entities/compra_detail.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_DB_HOST,
      port: +process.env.PG_DB_PORT,
      username: process.env.PG_DB_USERNAME,
      password: process.env.PG_DB_PASSWORD,
      database: process.env.PG_DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Account, Product, Compra, CompraDetail],
    }),
    // AuthenticationModule,
    // NotesModule,
    ProductsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopDto } from '../dtos/shop.dto';
import { Compra } from '../entities/compra.entity';
import { CompraDetail } from '../entities/compra_detail.entity';
// import { CreateAccountDto } from '../dtos/create-account.dto';
// import { Account } from '../entities/account.entity';
import { Product } from '../entities/product.entity';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    // @InjectRepository(Account)
    // private readonly accountRepository: Repository<Account>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
    @InjectRepository(CompraDetail)
    private readonly compraDetailRepository: Repository<CompraDetail>,
  ) {}

  async getProducts(): Promise<IProduct[]> {
    const products = await this.productRepository.find();
    return products;
  }

  async shop(shopDto: ShopDto) {
    const details = shopDto.list;
    const compra = new Compra();
    compra.userEmail = shopDto.userEmail;
    compra.userName = shopDto.userName;
    await this.compraRepository.save(compra);

    for (const detail of details) {
      const detailEntity = new CompraDetail();
      detailEntity.productId = detail.id;
      detailEntity.compra = compra;
      detailEntity.quantity = detail.quantity || 1;

      await this.compraDetailRepository.save(detailEntity);
    }
  }

  // async create(createAccountDto: CreateAccountDto): Promise<Account> {
  //   const account = new Account();
  //   account.firstName = createAccountDto.firstName;
  //   account.lastName = createAccountDto.lastName;
  //   account.email = createAccountDto.email;
  //   account.username = createAccountDto.username;
  //   account.password = createAccountDto.password;

  //   return this.accountRepository.save(account);
  // }

  // async findAll(): Promise<Account[]> {
  //   return this.accountRepository.find();
  // }

  // findOne(id: string): Promise<Account> {
  //   return this.accountRepository.findOne(id);
  // }

  // async findByUsername(username: string): Promise<Account> {
  //   const [user] = await this.accountRepository.find({
  //     where: {
  //       username,
  //     },
  //   });
  //   return user;
  // }

  // async delete(id: string): Promise<boolean> {
  //   const { affected } = await this.accountRepository.delete(id);
  //   return affected > 0;
  // }
}

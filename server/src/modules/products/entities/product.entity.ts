import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IProduct } from '../interfaces/product.interface';
// import { Account } from '../../accounts/entities/account.entity';

@Entity()
export class Product implements IProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image?: string;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column({ type: 'int', nullable: true })
  stock: string;

  @Column({ type: 'int', nullable: true })
  price: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Compra } from './compra.entity';

@Entity()
export class CompraDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  // @OneToOne(() => Product)
  // @JoinColumn()
  // product: Product;
  @Column({ type: 'int', nullable: false })
  productId: number;

  @ManyToOne(() => Compra, (compraDetail) => compraDetail.compraDetails)
  compra: Compra;

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

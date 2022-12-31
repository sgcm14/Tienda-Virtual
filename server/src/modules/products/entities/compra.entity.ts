import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompraDetail } from './compra_detail.entity';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CompraDetail, (compraDetail) => compraDetail.compra)
  compraDetails: CompraDetail[];

  @Column({ nullable: true })
  userName?: string;

  @Column({ nullable: true })
  userEmail?: string;

  @Column({ type: 'int', nullable: true })
  userId?: number;

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

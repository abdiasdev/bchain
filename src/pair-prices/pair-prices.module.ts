import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PairPrice } from './entities/pair-price.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PairPrice
    ])
  ]
})
export class PairPricesModule {}

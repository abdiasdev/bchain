import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SQLService } from 'src/services/sql.service';
import { PairPricesController } from './controllers/pair-prices.controller';
import { PairPrice } from './entities/pair-price.entity';
import { HttpPairPriceService } from './services/http-pair-price.service';
import { PairPricesService } from './services/pair-prices.service';
import { TaskService } from './services/tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PairPrice
    ]),
    HttpModule
  ],
  controllers: [
    PairPricesController
  ],
  providers: [
    PairPricesService,
    SQLService,
    TaskService,
    HttpPairPriceService
  ]
})
export class PairPricesModule {}

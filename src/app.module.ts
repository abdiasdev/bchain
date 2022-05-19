import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PairPricesModule } from './pair-prices/pair-prices.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'abdias',
      password: 'lizzie',
      database: 'bchain',
      "entities": ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    ScheduleModule.forRoot(),
    PairPricesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

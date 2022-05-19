import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

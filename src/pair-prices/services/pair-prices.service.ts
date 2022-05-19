import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SQLService } from 'src/services/sql.service';
import { Repository } from 'typeorm';
import { CreatePairPriceDto } from '../dto/create-pair-price.dto';
import { PartialPairPriceDto } from '../dto/partial-pair-price.dto';
import { PairPrice } from '../entities/pair-price.entity';

@Injectable()
export class PairPricesService
{
  constructor(
    @InjectRepository( PairPrice ) private pairPriceRepo: Repository<PairPrice>,
    private sqlSvc: SQLService
  ) {}

  async create( createPairPriceDto: CreatePairPriceDto ): Promise<PairPrice>
  {
    // In case couldn't get the pair price
    if( !createPairPriceDto ) return;

    // If exists → update
    const exists = await this.exists( createPairPriceDto )
    if( exists )
      return this.update( exists.id, createPairPriceDto )
    
    // Else → create
    const newPairPrice = await new PairPrice()
    this.pairPriceRepo.merge( newPairPrice, createPairPriceDto )
    
    return this.pairPriceRepo.save( newPairPrice )
  }

  findAll( partialPairPriceDto: PartialPairPriceDto ): Promise<PairPrice[]>
  {
    return this.pairPriceRepo.find( this.sqlSvc.like( partialPairPriceDto ));
  }

  find( where: Object ): Promise<PairPrice[]>
  {
    return this.pairPriceRepo.find( where )
  }

  findOne( id: number ): Promise<PairPrice>
  {
    return this.pairPriceRepo.findOne( id )
  }

  async exists( pairPriceDto: PartialPairPriceDto | CreatePairPriceDto ): Promise<PairPrice>
  {
    const pairPrice = await this.find({ pair: pairPriceDto.pair })
    return pairPrice.length > 0 ? pairPrice[ 0 ] : null
  }

  async update( id: number, pairPriceDto: PartialPairPriceDto | CreatePairPriceDto ): Promise<PairPrice>
  {
    const pairPrice = await this.findOne( id )
    this.pairPriceRepo.merge( pairPrice, pairPriceDto )

    return this.pairPriceRepo.save( pairPrice )
  }

  async remove( id: number ): Promise<boolean>
  {
    await this.pairPriceRepo.delete( id )
    return true
  }
}

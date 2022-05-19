import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CreatePairPriceDto } from '../dto/create-pair-price.dto'
import { PartialPairPriceDto } from '../dto/partial-pair-price.dto'
import { PairPricesService } from '../services/pair-prices.service'

@Controller('pair-prices')
export class PairPricesController
{
  constructor(private readonly pairPricesService: PairPricesService) {}

  @Post()
  create( @Body() createPairPriceDto: CreatePairPriceDto )
  {
    return this.pairPricesService.create(createPairPriceDto)
  }

  @Get()
  find( @Body() partialPairPriceDto: PartialPairPriceDto )
  {
    return this.pairPricesService.findAll( partialPairPriceDto )
  }

  @Get( ':id' )
  findOne( @Param( 'id' ) id: string )
  {
    return this.pairPricesService.findOne(+id)
  }

  @Patch( ':id' )
  update( @Param( 'id' ) id: string, @Body() partialPairPriceDto: PartialPairPriceDto )
  {
    return this.pairPricesService.update(+id, partialPairPriceDto)
  }

  @Delete( ':id' )
  remove( @Param( 'id' ) id: string )
  {
    return this.pairPricesService.remove( +id )
  }
}

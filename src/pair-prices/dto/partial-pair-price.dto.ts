import { PartialType } from '@nestjs/mapped-types';
import { CreatePairPriceDto } from './create-pair-price.dto';

export class PartialPairPriceDto extends PartialType( CreatePairPriceDto ) {}

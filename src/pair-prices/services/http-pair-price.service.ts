import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { map } from "rxjs";
import { getPairURL } from "src/configs/constants";
import { CreatePairPriceDto } from "../dto/create-pair-price.dto";

@Injectable()
export class HttpPairPriceService
{
    private readonly logger = new Logger( HttpPairPriceService.name );

    constructor(
        private http: HttpService
    ) {}

    /* To Get Price of KeyPair Coins */
    async getPairPrice( key: string ): Promise<CreatePairPriceDto>
    {
        console.log({ url: getPairURL( key ) })
        return new Promise( resolve => this.http
            .get( getPairURL( key ))
            .pipe( map( res => ({
                price: res?.data?.result?.price,
                cost: res?.data?.allowance?.cost,
                remaining: res?.data?.allowance?.remaining,
            })))
            .subscribe( res => {
                this.logger.debug({ res })
                resolve( new CreatePairPriceDto(
                    key,
                    res.price,
                    res.cost,
                    res.remaining,
                ));
            })
        );
    }
}
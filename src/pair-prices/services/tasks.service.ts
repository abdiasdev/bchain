import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { KeyPairRandom } from "../enum/key-pair-price.enum";
import { HttpPairPriceService } from "./http-pair-price.service";
import { PairPricesService } from "./pair-prices.service";

@Injectable()
export class TaskService
{
    constructor(
        private httpPairPriceSvc: HttpPairPriceService,
        private pairPriceSvc: PairPricesService
    ) {}

    /* Run every 10 Seconds */
    @Cron( CronExpression.EVERY_10_SECONDS )
    async runEvery10secs()
    {
        const newPairPrice = await this.pairPriceSvc.create(
            await this.httpPairPriceSvc.getPairPrice( KeyPairRandom() )
        )
        console.log({ newPairPrice });
    }
}
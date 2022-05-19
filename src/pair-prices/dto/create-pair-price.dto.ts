export class CreatePairPriceDto {
    pair: string
    
    price: number
    cost: number
    remaining: number

    created_at: string
    active: boolean

    constructor(
        pair: string,
        price: number,
        cost: number,
        remaining: number
    ) {
        this.pair = pair
        this.price = price
        this.cost = cost
        this.remaining = remaining
    }
}

export enum KeyPairPrice {
    BTCEUR = 'btceur',
    BTCUSD = 'btcusd',
    XLMUSD = 'xlmusd',
}

export function KeyPairRandom(): KeyPairPrice
{
    // calculate random number
    const index = Math.floor( Math.random() * Object.keys( KeyPairPrice ).length )
    return Object.values( KeyPairPrice )[ index ]
}

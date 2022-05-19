export const url: string = 'https://api.cryptowat.ch/markets/kraken/{keypair}/price'

export function getPairURL( key )
{
    return url.replace( '{keypair}', key )
}
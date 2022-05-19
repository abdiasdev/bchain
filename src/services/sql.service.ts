import { Injectable } from "@nestjs/common";
import { Like } from "typeorm";

@Injectable()
export class SQLService
{
    constructor() {}

    like( obj: Object )
    {
        for( let key in obj )
            obj[ key ] = Like( `%${obj[key]}%`)
        return obj
    }
}
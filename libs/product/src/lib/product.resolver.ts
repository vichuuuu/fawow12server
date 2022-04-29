import { Args, Query, Resolver } from '@nestjs/graphql'
import { options, string } from 'joi'
import { Product } from './models/product'
import { ProductService } from './product.service'

@Resolver()
export class ProductResolver {
    constructor(private readonly service:ProductService){}
    @Query(()=>[Product],{nullable:true})
    products(){
        return this.service.products()
    }
    @Query(()=>Product,{nullable:true})
    product(@Args('id') id:string){
        console.log(id);
        
        return this.service.product(id)
    }
}
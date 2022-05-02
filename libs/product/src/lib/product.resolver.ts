import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { options, string } from 'joi'
import { createProductInput } from './dto/create-product.input'
import { Product } from './models/product'
import { ProductService } from './product.service'
import { updateProductInput } from './dto/update-product.input'

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
    @Mutation(()=>Product,{nullable:true})
    createProduct(@Args('input')input:createProductInput){
        return this.service.createProduct(input)
    }
    
    @Mutation(()=>Product,{nullable:true})
    updateProduct(
        @Args('id') id:string,
        @Args('input')input:updateProductInput){
        return this.service.updateProduct(id,input)
    }

    @Mutation(()=>Boolean,{nullable:true})
    deleteProduct(@Args('id') id:string){
        return this.service.deleteProduct(id)
    }
    
    }
    
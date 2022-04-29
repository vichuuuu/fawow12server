import { Injectable } from "@nestjs/common";
import { Product } from './models/product'

@Injectable()
export class ProductService {
    items: Product[] = [
        { id: 'intro-to-graphql', title: 'introduction to graphql' }

    ]
    public products() {
        return this.items
    }
    public product(id:string){
        return this.items.find(item=>item.id===id)
    }
}
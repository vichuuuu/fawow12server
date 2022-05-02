import { Injectable } from "@nestjs/common";
import { createProductInput } from "./dto/create-product.input";
import { updateProductInput } from "./dto/update-product.input";
import { Product } from './models/product'

@Injectable()
export class ProductService {
    items: Product[] = [
        { id: 'intro-to-graphql', title: 'introduction to graphql' }

    ]
    public products() {
        return this.items
    }
    public product(id: string) {
        return this.items.find(item => item.id === id)
    }

    public createProduct(input: createProductInput) {
        const newProduct: Product = {
            id: Date.now().toString(),
            ...input,
        }
        this.items.push(newProduct)
        return newProduct
    }
    public updateProduct(id: string, input: updateProductInput) {
        const product = this.product(id)
        const updated: Product = {
            ...product,
            ...input,
        }
        this.items = this.items.map(item => {
            if (item.id === id) {
                return updated
            }
            return item
        })
        return updated
    }

    public deleteProduct(id:string) {
        const product = this.product(id)
        if (!product) {

            return false
        }
        this.items = this.items.filter((item: Product) => item.id !== id)
        return true
    }
}
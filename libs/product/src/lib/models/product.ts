import { Field, ObjectType } from '@nestjs/graphql'
import { Category } from './category'

@ObjectType()
export class Product {
  @Field({ nullable: true }) //options: { nullable: true }
  id?: string

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  imageUrl?: string

  @Field(() => Category, { nullable: true })
  category?: Category[]
}
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Category {
  @Field({ nullable: true }) //options: { nullable: true }
  id?: string
  @Field({ nullable: true })
  title?: string
  @Field({ nullable: true })
  description?: string
//   @Field(returnTypeFunction:()=>[Category])
//    category: category[]
}
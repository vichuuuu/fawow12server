import { Field, InputType } from "@nestjs/graphql";

@InputType()
export  class updateProductInput{
    @Field({nullable:true})
    title:string

    @Field({nullable:true})
    description?:string

    @Field({nullable:true})
    imageurl?:string
}
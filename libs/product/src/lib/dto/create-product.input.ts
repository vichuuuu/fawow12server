import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createProductInput{
    @Field()
    title:string

    @Field({nullable:true})
    description?:string

    @Field({nullable:true})
    imageurl?:string
}

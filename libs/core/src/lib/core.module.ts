import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import { configuration } from './config/configuration'
import { validationSchema } from './config/validation'
import { GraphQLModule } from '@nestjs/graphql'
import { CoreResolver } from './core.resolver';

@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true, 
      driver: ApolloDriver,
      playground:true,
    }),
   
  ],
  controllers: [],
  providers: [CoreResolver],
  exports: [],
})
export class CoreModule {}

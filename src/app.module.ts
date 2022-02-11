import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeormMongoDBOptions, typeormPostgresOptions } from './helpers';
import { RideMongo, RidePostgres } from './Rides/ride.entity';
import { RideModule } from './Rides/ride.module';

@Module({
  imports: [
    RideModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeormPostgresOptions({ entities: [RidePostgres] })),
    TypeOrmModule.forRoot(typeormMongoDBOptions({ entities: [RideMongo] })),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

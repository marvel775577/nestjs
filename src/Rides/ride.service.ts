import { Injectable } from '@nestjs/common';
import { RideRO } from './ride.types';
import { getRepository } from 'typeorm';
import { RideMongo, RidePostgres } from './ride.entity';

@Injectable()
export class RideService {
  async getRides(): Promise<RideRO[]> {
    const mongoConnection = getRepository(RideMongo, 'mongodb');
    const postgresConnection = getRepository(RidePostgres, 'postgres');

    const pgData = await postgresConnection
      .createQueryBuilder('ride')
      .getMany();
    const pgRes: RideRO[] = pgData.map((el) => ({
      rideId: el.rideID,
      driverName: el.driverName,
      driverVehicle: el.driverVehicle,
      createdAt: el.created,
    }));
    const mongoData = await mongoConnection.find({});
    const mongoRes: RideRO[] = mongoData.map((el) => ({
      rideId: el.id,
      driverName: el.driver.name,
      driverVehicle: el.driver.vehicle,
      createdAt: el.created,
    }));

    return [...mongoRes, ...pgRes];
  }
}

import { ObjectID } from 'typeorm';

export interface RideRO {
  rideId: number | string | ObjectID;
  driverName: string;
  driverVehicle: string;
  createdAt: Date;
}

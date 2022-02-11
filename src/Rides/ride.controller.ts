import { Controller, Get } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideRO } from './ride.types';

@Controller()
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Get('/rides')
  getHello(): Promise<RideRO[]> {
    return this.rideService.getRides();
  }
}

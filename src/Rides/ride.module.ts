import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';

@Module({
  imports: [],
  controllers: [RideController],
  providers: [RideService],
})
export class RideModule {}

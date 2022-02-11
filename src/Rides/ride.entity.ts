import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('ride')
export class RidePostgres {
  @PrimaryGeneratedColumn()
  rideID: number;

  @Column('text')
  driverName: string;

  @Column('text')
  driverVehicle: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created: Date;
}

@Entity()
export class Driver {
  @Column()
  name: string;

  @Column()
  vehicle: string;
}

@Entity('ride')
export class RideMongo {
  @ObjectIdColumn()
  id: ObjectID;

  @Column(() => Driver)
  driver: Driver;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created: Date;
}

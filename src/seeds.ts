import { RideMongo, RidePostgres } from './Rides/ride.entity';
import { createConnection, getRepository } from 'typeorm';

// Mocking data for Postgres
async function runPostgresSeeding() {
  const connectionPostgres = await createConnection({
    type: 'postgres',
    port: +process.env.POSTGRES_PORT || 5432,
    host: process.env.POSTGRES_HOST || 'postgres',
    username: process.env.POSTGRES_USERNAME || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    entities: [RidePostgres],
  });

  const ridePostgresRepository = getRepository(RidePostgres);
  await ridePostgresRepository.clear();

  for (let i = 0; i < 100; i++) {
    const ridePostgres = new RidePostgres();

    ridePostgres.driverName = 'Driver Name Postgres ' + i;
    ridePostgres.driverVehicle = 'Driver Vehicle Postgres ' + i;
    console.log('ride postgres', ridePostgres);
    await ridePostgresRepository.save(ridePostgres);
  }

  await connectionPostgres.close();
}

// Mocking data for mongoDB
async function runMongoSeeding() {
  const connectionMongo = await createConnection({
    useUnifiedTopology: true,
    type: 'mongodb',
    port: +process.env.MONGODB_PORT || 27017,
    host: process.env.MONGODB_HOST || 'mongodb',
    username: process.env.MONGO_USERNAME || 'mongodb',
    password: process.env.MONGO_PASSWORD || 'mongodb',
    entities: [RideMongo],
  });

  const rideMongoRepository = getRepository(RideMongo);
  const mongoData = await rideMongoRepository.find({});
  if (mongoData.length !== 0) {
    await rideMongoRepository.clear();
  }

  for (let i = 0; i < 90; i++) {
    const rideMongo = new RideMongo();

    rideMongo.driver = {
      name: 'Driver Name Mongo ' + i,
      vehicle: 'Driver Vehicle Mongo ' + i,
    };
    console.log('ride mongo', rideMongo);
    await rideMongoRepository.save(rideMongo);
  }

  await connectionMongo.close();
}

// Run seeding process in chain
runPostgresSeeding().then(() => runMongoSeeding());

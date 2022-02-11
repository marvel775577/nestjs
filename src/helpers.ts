import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mongoConfig = {
  name: 'mongodb',
  type: 'mongodb',
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || 'mongodb',
  username: process.env.MONGO_USERNAME || 'mongodb',
  password: process.env.MONGO_PASSWORD || 'mongodb',
  autoLoadEntities: true,
  synchronize: true,
};

export const postgresConfig = {
  name: 'postgres',
  type: 'postgres',
  port: process.env.POSTGRESQL_PORT || 5432,
  host: process.env.POSTGRES_HOST || 'postgres',
  username: process.env.POSTGRES_USER || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  autoLoadEntities: true,
  synchronize: true,
};

export const typeormPostgresOptions = (
  overrides?: Partial<TypeOrmModuleOptions>,
): TypeOrmModuleOptions =>
  ({ ...postgresConfig, ...overrides } as TypeOrmModuleOptions);

export const typeormMongoDBOptions = (
  overrides?: Partial<TypeOrmModuleOptions>,
): TypeOrmModuleOptions =>
  ({ ...mongoConfig, ...overrides } as TypeOrmModuleOptions);

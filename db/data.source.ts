import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ||'127.0.0.1',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME ||'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'my_database',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  logging: false,
  synchronize: true
}

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();
export default dataSource;
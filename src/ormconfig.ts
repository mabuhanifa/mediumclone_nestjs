import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: process.env.PASSWORD,
  database: 'mediumclone',
};

export default config;

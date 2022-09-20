import "reflect-metadata"
require('dotenv').config()
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"

console.log(process.env.DATABASE_HOST)

export const AppDataSource = new DataSource({
    type: 'mongodb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    name: process.env.DATABASE_MASTER_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    authSource: process.env.DATABASE_AUTH_SOURCE,
    synchronize: true,
    logging: false,
    entities: [Photo, User, PhotoMetadata],
    migrations: [],
    subscribers: [],
})

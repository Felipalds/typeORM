import "reflect-metadata"
require('dotenv').config()
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"



import * as fs from 'fs'
import * as path from 'path'

console.log(process.env.DATABASE_HOST)
console.log(fs.readFileSync(path.resolve('rds-combined-ca-bundle.pem')))

export const AppDataSource = new DataSource({
    type: process.env.TYPE || 'mongodb',
    useNewUrlParser: process.env.USE_NEW_URL_PARSER || true,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY || true,
    url: process.env.DATABASE_HOST,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    name: process.env.DATABASE_MASTER_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    authSource: process.env.DATABASE_AUTH_SOURCE,
    synchronize: process.env.SYNCHRONIZE || true,
    logging: process.env.LOGGING || false,
    entities: [Photo, User, PhotoMetadata],
    migrations: [],
    subscribers: [],
    ssl: process.env.SSL || true,
    sslCA: fs.readFileSync(path.resolve('rds-combined-ca-bundle.pem')),
    sslValidate: process.env.SSL_VALIDATE || false,
    retryWrites: process.env.RETRY_WRITES || false
})

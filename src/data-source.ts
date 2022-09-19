import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [Photo, User, PhotoMetadata],
    migrations: [],
    subscribers: [],
})

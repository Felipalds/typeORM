import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [Photo, User],
    migrations: [],
    subscribers: [],
})

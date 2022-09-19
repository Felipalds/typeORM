import {
    Entity,
    Column,
    ObjectIdColumn,
    OneToOne,
    JoinColumn,
    ObjectID
} from "typeorm"
import { Photo }from "./Photo"

@Entity()
export class PhotoMetadata {
    @ObjectIdColumn()
    id: ObjectID

    @Column("int")
    height: number

    @Column("int")
    width: number

    @Column("enum")
    orientation: ['landscape', 'portrait']

    @Column()
    compressed: boolean

    @Column()
    photo: Photo
}
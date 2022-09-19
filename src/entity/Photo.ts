import { Column, ObjectID, ObjectIdColumn } from "typeorm"
import { Entity } from "typeorm"

@Entity() // this turns a class into an entity
export class Photo {
    @ObjectIdColumn()
    id: ObjectID

    @Column({
        length: 100
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename?: string

    @Column("double")
    views: number

    @Column()
    isPublished: boolean
}
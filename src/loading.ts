import { Photo } from "./entity/Photo"
import { AppDataSource } from "./data-source"
import { MoreThan, MoreThanOrEqual } from "typeorm"

export default async() => {
    const photoRepository = AppDataSource.getRepository(Photo)
    const allPhotos = await photoRepository.find()
    console.table(allPhotos)

    const onePhoto = await photoRepository.findOneBy({
        views: 30
    })
    console.log(onePhoto)

    const bears = await photoRepository.findOneBy({
        name: "Me and the Bears"
    })
    console.log(bears)

    // const highViews = await photoRepository.findBy({
    //     views: MoreThanOrEqual(100)
    // })
    // console.table(highViews)

    const [ photos, photosCount ] = await photoRepository.findAndCount()
    console.log("All "+ photosCount+ " photos, again: ")
    console.table(photos)


}


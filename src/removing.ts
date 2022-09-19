import { Photo } from './entity/Photo'
import { AppDataSource } from './data-source'

export default async () => {
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToRemove = await photoRepository.findOneBy({
        views: 30
    })
    await photoRepository.remove(photoToRemove)
}
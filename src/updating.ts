import { Photo } from './entity/Photo'
import { AppDataSource } from './data-source'


export default async () => {
    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToUpdate = await photoRepository.findOneBy({
        name: "Foto do Luiz"
    })
    photoToUpdate.name = "Luiz em NYC!"
    await photoRepository.save(photoToUpdate)
}

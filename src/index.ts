import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import loading from "./loading"
import updating from "./updating"
import removing from "./removing"

console.log("ABCV")

AppDataSource.initialize().then(async () => {

    console.log("Initialized")

    const photo = new Photo()
    photo.name = "Foto"
    photo.description = "Foto na praia de BC"
    photo.views = 432
    photo.isPublished = false
    
    const photoRepository = AppDataSource.getRepository(Photo)
    await photoRepository.save(photo)
    console.log("Photos saved")

    const savedPhotos = await photoRepository.find()
    console.table(savedPhotos)


    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Finished with Success!!!!")
    // console.log("Here you can setup and run express / fastify / any other framework.")

    //await loading()
    //await updating()
    //await removing()
}).catch(error => console.log(error))

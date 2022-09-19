# typeORM
Object-relational mapping for TypeScript

        1. yarn init -y
        2. yarn add typescript -D
        3. tsc --init
        4. yarn add ts-node-dev -D
        5. yarn add typeorm 
        6. yarn add reflect-metadata //for decorators
        7. yarn add @types/node
        8. yarn add mongodb@^3.6.0
        9. active decorators in tsconfig.json
        10. npx typeorm init --database mongodb

## What is an ORM
    Object-relational mapping is a technique for converting data using object-oriented programming language. Basicly, you database and datas is nothing more than classes and objects.

## TypeORM
### Models
    For creating a table, you create a **model**. The models are the documents in Mongo
### Entities
    Entity is your model decorated by and **@Entity** decorator. With entities, you can **load, insert, update and remove** data.

    - Each entity has columns (the fields in Mongo's JSON)
    - You need to specify the PrimaryColumn (ObjectID)
      - This PrimaryColumn can also be an auto-generated column
    - In each column you can specify the correct type of the data
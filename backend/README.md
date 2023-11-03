# DDD Blog

## Layers of the application

This is a simple explanation of the layers of the application and the behavior between them.

![alt text](./docs/ddd-layers.png 'DDD Layers')

## Folder structure

Decorator to avoid Onsave action in VSCode

```ts
blog (bounded context)
    - infrastructure
        - repositories
            - mysql
                - post
                    - postGetById.repository.ts
        - config
            - database
                - mysql
                    - mysql.config.ts

    - application

    - domain
        - entities
            - post
                - post.entity.ts
            - comment
                - comment.entity.ts
        - dto
            - post
                - post.dto.ts
            - comment
                - comment.dto.ts
        - value-objects
            - name.value-object.ts
        - interfaces
            - repositories
                - post.repository.interface.ts
                - comment.repository.interface.ts

    - presentation
        - controllers
            - post
                - post.controller.ts
      /*  - dtos
            - post
                - post.dto.ts
        - mappers
            - post
                - post.mapper.ts
        - routes
            - post
                - post.routes.ts*/
```

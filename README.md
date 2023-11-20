# Clean architecture Blog

## Run the project

You will need to have installed docker

```bash
docker-compose build
docker-compose up
```

Backend application will be running on http://localhost:8080

### Backend

## Objective

The objective of this project is to create a blog using clean architecture and DDD. The project is divided in two parts:

- backend: Built with NestJS following DDD and clean architecture principles.
- frontend: ToDo

## Naming conventions

### Directory naming conventions

We are going to follow this for naming folders and directories:

- Directories are all kebab-case. For example: `../domain/value-objects`.

### File naming conventions

We are going to follow this for naming files:

- Files are PascalCase. For example: `../application/create-posts/CreatePosts.service.ts`.
- Files are named after the class or interface they contain, plus their extension. For example: `../domain/value-objects/PostsStatus.vo.ts`.
- Domain files are naming in plural. For example: `../domain/entities/Posts.entity.ts`.

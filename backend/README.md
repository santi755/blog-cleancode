# DDD Blog

## Layers of the application

This is a simple explanation of the layers of the application and the behavior between them.

![alt text](./docs/ddd-layers.png 'DDD Layers')

## Folder structure

Decorator to avoid Onsave action in VSCode

```ts
src
├── bounded-contexts
│   ├── blog
│   │   ├── application
│   │   │   ├── services
│   │   │   │   └── posts
│   │   │   │       ├── create-post
│   │   │   │       │   ├── create-post.service.ts
│   │   │   │       │   └── create-post.service.spec.ts
│   │   │   │       ├── delete-post
│   │   │   │       │   ├── delete-post.service.ts
│   │   │   │       │   └── delete-post.service.spec.ts
│   │   │   │       ├── get-post
│   │   │   │       │   ├── get-post.service.ts
│   │   │   │       │   └── get-post.service.spec.ts
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   └── posts
│   │   │   │       ├── posts.entity.ts
│   │   │   │       └── posts.entity.spec.ts
│   │   │   │   └── comments
│   │   │   │       ├── comments.entity.ts
│   │   │   │       └── comments.entity.spec.ts
│   │   ├── infrastructure
│   │   │   ├── repositories
│   │   │   │   └── posts
│   │   │   │       ├── typeOrmPosts.repository.ts
│   │   │   │       └── typeOrmPosts.repository.spec.ts
│   │   │   │   └── comments
│   │   │   │       ├── typeOrmComments.repository.ts
│   │   │   │       └── typeOrmComments.repository.spec.ts
│   │   │   └── mappers
│   │   │       └── posts
│   │   │           ├── post.mapper.ts
│   │   │           └── post.mapper.spec.ts

```

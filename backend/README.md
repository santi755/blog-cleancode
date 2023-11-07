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
│   │   │   │       ├── posts.service.ts
│   │   │   │       └── posts.service.spec.ts
│   │   │   └── use-cases
│   │   │       └── posts
│   │   │           ├── create-post
│   │   │           │   ├── create-post.use-case.ts
│   │   │           │   └── create-post.use-case.spec.ts
│   │   │           ├── delete-post
│   │   │           │   ├── delete-post.use-case.ts
│   │   │           │   └── delete-post.use-case.spec.ts
│   │   │           ├── get-post
│   │   │           │   ├── get-post.use-case.ts
│   │   │           │   └── get-post.use-case.spec.ts
│   │   │           ├── get-posts
│   │   │           │   ├── get-posts.use-case.ts
│   │   │           │   └── get-posts.use-case.spec.ts
│   │   │           ├── update-post
│   │   │           │   ├── update-post.use-case.ts
│   │   │           │   └── update-post.use-case.spec.ts
│   │   │           └── index.ts
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

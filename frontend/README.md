# DDD Blog

## Layers of the application

This is a simple explanation of the layers of the application and the behavior between them.

![alt text](./docs/ddd-layers.png 'DDD Layers')

### Testing

We are using Vue3 Testing Library for testing the frontend:
https://testing-library.com/

`yarn add --dev @testing-library/vue`

### Linting

We are using ESLint for linting the frontend:
https://eslint.org/

`yarn add --dev eslint`

### Formatting

We are using Prettier for formatting the frontend:
https://prettier.io/

`yarn add --dev prettier`

### Frontend folder structure following Clean Architecture

```
frontend
├── public

├── src
│   ├── assets
│   ├── domain
│   │   ├── entities
|   |   |   ├── post
|   |   |   |   ├── post.entity.ts
|   |   |   └── comment
|   |   |       ├── comment.entity.ts
|   |   |   └── user
|   |   |       ├── user.entity.ts
|   |   |       └── user.entity.spec.ts
│   │   ├── repositories
|   |   |   ├── post
|   |   |   |   ├── post.repository.ts
|   |   |   └── comment
|   |   |       ├── comment.repository.ts
|   |   |   └── user
|   |   |       ├── user.repository.ts
│   ├── infrastructure
│   │   ├── api
|   |   |   ├── post
|   |   |   |   ├── post.api.ts
|   |   |   └── comment
|   |   |       ├── comment.api.ts
|   |   |   └── user
|   |   |       ├── user.api.ts
│   │   ├── config
│   │   ├── i18n
│   │   ├── router
|   |   |   ├── index.ts
|   |   |   ├── routes.ts
│   │   ├── store
|   |   |   ├── index.ts
|   |   |   ├── modules
|   |   |   |   ├── post
|   |   |   |   |   ├── post.module.ts
|   |   ├── ui
|   |   |   ├── components
|   |   |   |   ├── atoms
|   |   |   |   |   ├── button
|   |   |   |   |   |   ├── button.component.ts
|   |   |   |   |   |   ├── button.component.spec.ts
|   |   |   |   |   |   ├── button.component.stories.ts
|   |   |   |   |   |   └── button.component.scss
|   |   |   |   ├── molecules
|   |   |   |   |   ├── link
|   |   |   |   |   |   ├── link.component.ts
|   |   |   |   |   |   ├── link.component.spec.ts
|   |   |   |   |   |   ├── link.component.stories.ts
|   |   |   |   |   |   └── link.component.scss
|   |   |   |   ├── organisms
|   |   |   |   |   ├── header
|   |   |   |   |   |   ├── header.component.ts
|   |   |   |   |   |   ├── header.component.spec.ts
|   |   |   |   |   |   ├── header.component.stories.ts
|   |   |   |   |   |   └── header.component.scss
|   |   |   |   ├── templates
|   |   |   |   |   ├── home
|   |   |   |   |   |   ├── home.component.ts
|   |   |   |   |   |   ├── home.component.spec.ts
|   |   |   |   |   |   ├── home.component.stories.ts
|   |   |   |   |   |   └── home.component.scss
│   │   └── utils
│   ├── application
│   │   ├── usecases
|   |   |   ├── post
|   |   |   |   ├── publishPost.usecase.ts
|   |   |   |   ├── deletePost.usecase.ts
|   |   |   |   ├── showPost.usecase.ts
|   |   |   |   ├── listPosts.usecase.ts
|   |   |   |   ├── updatePost.usecase.ts
|   |   |   └── comment
|   |   |   |   ├── publishComment.usecase.ts
|   |   |   |   ├── showComment.usecase.ts
|   |   |   |   ├── listComments.usecase.ts
│   │   ├── repositories
|   |   |   ├── post
|   |   |   |   ├── createPost.repository.ts
|   |   |   |   ├── deletePost.repository.ts
|   |   |   |   ├── getPost.repository.ts
|   |   |   |   ├── getPosts.repository.ts
|   |   |   |   ├── updatePost.repository.ts
|   |   |   └── comment
|   |   |   |   ├── createComment.repository.ts
|   |   |   |   ├── getComment.repository.ts
|   |   |   |   ├── getComments.repository.ts
│   │   ├── interceptors
│   │   ├── decorators
│   │   ├── middlewares
│   │   ├── guards
│   │   ├── constants
│   │   ├── schemas
│   │   ├── mocks
│   │   ├── seeds
│   │   ├── shared

│   ├── App.vue
│   ├── main.ts
│   ├── registerServiceWorker.ts
│   └── shims-vue.d.ts

```

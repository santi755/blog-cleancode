# DDD Blog

## Layers of the application

This is a simple explanation of the layers of the application and the behavior between them.

![alt text](./docs/ddd-layers.png 'DDD Layers')

## Folder structure

Decorator to avoid Onsave action in VSCode

## ToDo

### Domain functions

- [x] Remove Comments.service and use CommentRepository inside each service instead (DDD)
- [x] Change folder structure. Inside "blog" should be "Posts, Comments..." folders. And inside each one, the corresponding DDD layers ("application, domain, infrastructure, presentation"). (Vertical slicing)
- [x] Separate controller methods in different files. The name of the file should be the name of the controller method (e.g. "createPost.controller.ts")
- [ ] Add a shared folder with common classes (like "ValueObject" and "Entity")
- [ ] Refactor value objects to use "static of" and "static fromPrimitives" methods

### Following iterations

- [ ] Add CQRS (Command Query Responsibility Segregation). Create a folder "application" and inside it, create a folder "commands" and "queries". Move the corresponding files to each folder.
- [] Add MongoDB as a database. Create a folder "infrastructure" and inside it, create a folder "persistence". Move the corresponding files to each folder.

### Environment functions

- [ ] Dockerize the application
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add e2e tests
- [ ] Add CI/CD
- [ ] Add swagger
- [ ] Add authentication
- [ ] Add authorization
- [ ] Add logging
- [ ] Add monitoring

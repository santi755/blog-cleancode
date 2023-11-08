# Clean architecture Blog

## Layers

The project is divided in four layers and each layer is divided in modules:

- Domain: This layer contains the business logic of the application. It is the most inner layer and it is independent of the other layers.

  - Entities.
  - Value Objects.
  - Interfaces.

- Application: This layer contains the application logic. It is the layer that connects the domain layer with the infrastructure layer.

  - \*Use Cases.
  - Services.

- Infrastructure: This layer contains the implementation of the application. It is the layer that connects the application layer with the external world.

  - Repositories.
  - Domain.
  - Mappers.

- Presentation: This layer contains the presentation logic. It is the layer that connects the application layer with the user.
  - Controllers.

## Principles

We are going to follow the principles of clean architecture and DDD. For example:

- The domain layer should not have dependencies on other layers, frameworks, databases, external agencies, or UI.
- The application layer should not have dependencies on frameworks, databases, external agencies, or UI.
- The infrastructure layer should not have dependencies on frameworks, databases, external agencies, or UI.

## Objective

The objective of this project is to create a blog using clean architecture and DDD. The project is divided in two parts:

- backend: Built with NestJS following DDD and clean architecture principles.
- frontend: ToDo

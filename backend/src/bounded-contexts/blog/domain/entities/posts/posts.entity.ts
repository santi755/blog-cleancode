import { PostsId } from 'src/bounded-contexts/blog/domain/value-objects/posts-id.value-object';
import { PostsStatus } from 'src/bounded-contexts/blog/domain/value-objects/posts-status.value-object';

export class Posts {
  private readonly id: PostsId;
  private publishedAt: Date;
  private updatedAt: Date;
  private title: string;
  private content: string;
  private status: PostsStatus;

  constructor({
    id,
    publishedAt,
    updatedAt,
    title,
    content,
    status,
  }: {
    id: string;
    publishedAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    status: string;
  }) {
    this.id = new PostsId(id);
    this.publishedAt = publishedAt;
    this.updatedAt = updatedAt;
    this.title = title;
    this.content = content;
    this.status = new PostsStatus(status);
  }

  get idValue(): string {
    return this.id.value;
  }

  get publishedAtValue(): Date {
    return this.publishedAt;
  }

  get updatedAtValue(): Date {
    return this.updatedAt;
  }

  get titleValue(): string {
    return this.title;
  }

  get contentValue(): string {
    return this.content;
  }

  get statusValue(): string {
    return this.status.value;
  }
}

import { PostsId } from 'src/bounded-contexts/blog/domain/value-objects/posts-id.value-object';
import { PostsStatus } from 'src/bounded-contexts/blog/domain/value-objects/posts-status.value-object';

export class Posts {
  private readonly id: PostsId;
  private publishedAt: Date;
  private editedAt: Date;
  private title: string;
  private content: string;
  private status: PostsStatus;

  constructor({
    id,
    publishedAt,
    editedAt,
    title,
    content,
    status,
  }: {
    id: string;
    publishedAt: Date;
    editedAt: Date;
    title: string;
    content: string;
    status: string;
  }) {
    this.id = new PostsId(id);
    this.publishedAt = publishedAt;
    this.editedAt = editedAt;
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

  get editedAtValue(): Date {
    return this.editedAt;
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

  set titleValue(title: string) {
    this.title = title;
  }

  set statusValue(status: string) {
    this.status = new PostsStatus(status);
  }

  set contentValue(content: string) {
    this.content = content;
  }

  set editedAtValue(editedAt: Date) {
    this.editedAt = editedAt;
  }
}

import { UuidVO } from 'src/bounded-contexts/blog/domain/value-objects/Uuid.vo';
import { PostsStatus } from 'src/bounded-contexts/blog/domain/value-objects/PostsStatus.vo';
import { Comments } from 'src/bounded-contexts/blog/domain/entities/comment/comment.entity';

export class Posts {
  private readonly id: UuidVO;
  private publishedAt: Date;
  private editedAt: Date;
  private title: string;
  private content: string;
  private status: PostsStatus;
  private comments: Comments[];

  constructor({
    id,
    publishedAt,
    editedAt,
    title,
    content,
    status,
    comments = [],
  }: {
    id: string;
    publishedAt: Date;
    editedAt: Date;
    title: string;
    content: string;
    status: string;
    comments?: Comments[];
  }) {
    this.id = new UuidVO(id);
    this.publishedAt = publishedAt;
    this.editedAt = editedAt;
    this.title = title;
    this.content = content;
    this.status = new PostsStatus(status);
    this.comments = comments;
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

  get commentsValue(): Comments[] {
    return this.comments;
  }
}

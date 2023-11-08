import { UuidVO } from 'src/blog/posts/domain/value-objects/Uuid.vo';

export class Comments {
  private readonly id: UuidVO;
  private readonly postId: UuidVO;
  private author: string;
  private content: string;
  private createdAt: Date;

  constructor({
    id,
    postId,
    author,
    content,
    createdAt,
  }: {
    id: string;
    postId: string;
    author: string;
    content: string;
    createdAt: Date;
  }) {
    this.id = new UuidVO(id);
    this.postId = new UuidVO(postId);
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
  }

  get idValue(): string {
    return this.id.value;
  }

  get postIdValue(): string {
    return this.postId.value;
  }

  get authorValue(): string {
    return this.author;
  }

  get contentValue(): string {
    return this.content;
  }

  get createdAtValue(): Date {
    return this.createdAt;
  }

  set authorValue(author: string) {
    this.author = author;
  }

  set contentValue(content: string) {
    this.content = content;
  }

  set createdAtValue(createdAt: Date) {
    this.createdAt = createdAt;
  }
}

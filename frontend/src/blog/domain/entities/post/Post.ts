export default class Post {
    id: string;
    publishedAt: Date;
    editedAt: Date;
    title: string;
    content: string;
    status: string;
    comments: Comment[];

    constructor(
        id: string,
        publishedAt: Date,
        editedAt: Date,
        title: string,
        content: string,
        status: string,
        comments: Comment[]
    ) {
        this.id = id;
        this.publishedAt = publishedAt;
        this.editedAt = editedAt;
        this.title = title;
        this.content = content;
        this.status = status;
        this.comments = comments;
    }

    static create(
        id: string,
        publishedAt: Date,
        editedAt: Date,
        title: string,
        content: string,
        status: string,
        comments: Comment[]
    ): Post {
        return new Post(
            id,
            publishedAt,
            editedAt,
            title,
            content,
            status,
            comments
        );
    }
}

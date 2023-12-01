export default class Comment {
    constructor(
        public readonly id: string,
        private readonly post: string,
        public readonly author: string,
        public readonly content: string,
        public readonly createdAt: Date
    ) {}

    static create(
        id: string,
        post: string,
        author: string,
        content: string,
        createdAt: Date
    ): Comment {
        return new Comment(id, post, author, content, createdAt);
    }
}

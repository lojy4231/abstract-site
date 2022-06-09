class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find((exisBoard) => exisBoard.name === board.name)) {
            throw new Error('이름이 같으면 안됨');
        }
        board.flag = true;
        this.boards.push(board);
    }

    findBoardByName() {
        return this.boards.find((board) => board.name);
    }
}

class Board {
    constructor(boardName) {
        if (!boardName) {
            throw new Error('보드이름을 넣으시오');
        }
        this.name = boardName;
        this.articles = [];
    }
    publish(article) {
        if (this.flag !== true) {
            throw new Error('사이트에 없는 보드임');
        }
        const randomId = Math.random().toString(36).substring(2, 16);
        article.id = `${this.name}-${randomId}`;
        article.createdDate = new Date().toISOString();
        article.flag = true;

        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor({ subject, content, author }) {
        if (!subject || !content || !author) {
            throw new Error('빈배열은 용납 못함');
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comment = [];
    }

    reply(comment) {
        if (this.flag !== true) {
            throw new Error('보드에 없는 아티클임');
        }
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);
    }

    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor({ content, author }) {
        if (!content || !author) {
            throw new Error('빈배열은 용납 못함');
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};

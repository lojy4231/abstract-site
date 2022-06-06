class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find((exisBoard) => exisBoard.name === board.name)) {
            throw new Error('이름이 같으면 안됨');
        }
        this.boards.push(board);
    }

    findBoardByName() {
        return this.boards.find((board) => board.name);
    }
}

class Board {
    constructor(boardName) {
        if (boardName === '' || boardName === null) {
            throw new Error('보드이름을 넣으시오');
        }
        this.name = boardName;
        this.articles = [];
    }
    publish(article) {
        const randomId = Math.random().toString(36).substring(2, 16);
        article.id = `${this.name}-${randomId}`;
        const date = new Date();
        article.createdDate = date.toISOString();

        this.articles.push(article);

        // throw new Error('사이트에 없는 보드임');
    }

    getAllArticles() {
        const articleList = [];
        this.articles.forEach((article) => articleList.push(article));
        return articleList;
    }
}

class Article {
    constructor({ subject, content, author }) {
        if (subject === '' || subject === null) {
            throw new Error('빈배열은 용납 못함');
        } else if(content === '' || content === null){
            throw new Error('빈배열은 용납 못함');
        }else if(author === '' || author === null){
            throw new Error('빈배열은 용납 못함');
        }
        this.subject = subject;
        this.content = content;
        this.author = author;

        this.comment = [];
    }

    reply(comment){
        const date = new Date();
        comment.createdDate = date.toISOString();

        this.comment.push(comment);
        console.log('이거슨 코멘트 등록:', comment);
    }

    getAllComments(){
        const commentList = [];
        this.comment.forEach((comment) => commentList.push(comment));
        return commentList;
    }



}

class Comment {
    constructor({content, author}) {
        if (content === '' || content === null) {
            throw new Error('빈배열은 용납 못함');
        } else if(author === '' || author === null){
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

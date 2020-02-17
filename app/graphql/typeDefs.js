module.exports = `
    enum Status {
        PENDING
        COMPLETED
    }

    type Project {
        id: ID!
        name: String!
        todos: [Todo]
    }

    input ProjectInput {
        name: String!
    }

    type Comment {
        id: ID!
        text: String!
        todo: Todo!
    }

    input CommentInput {
        text: String!
        todoId: ID!
    }

    type Todo {
        id: ID!
        todo: String!
        status: Status!
        project: Project!
        comments: [Comment]
    }

    input TodoInput {
        todo: String!
        projectId: ID!
    }

    type Query {
        project(id: ID!): Project
        todo(id: ID!): Todo
        listProjects: [Project]
        listTodos(projectId: ID, showCompleted: Boolean): [Todo]
        listComments(todoId: ID!): [Comment]
    }

    type Mutation {
        addProject(project: ProjectInput!): Project!
        addTodo(todo: TodoInput!): Todo!
        addComment(comment: CommentInput!): Comment
        completeTodo(id: ID!): Boolean!
        deleteTodo(todoId: ID!): Boolean!
        deleteComment(commentId: ID!): Boolean!
    }
`

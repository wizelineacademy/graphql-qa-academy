module.exports = `
    enum Status {
        PENDING
        COMPLETED
    }

    type Todo {
        id: ID!
        todo: String!
        status: Status!
    }

    input TodoInput {
        todo: String!
    }

    type Query {
        todo(id: ID!): Todo
        listTodos(showCompleted: Boolean): [Todo]
    }

    type Mutation {
        addTodo(todo: TodoInput!): Todo!
        completeTodo(id: ID!): Boolean
    }
`
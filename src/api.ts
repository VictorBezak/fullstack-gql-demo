import Data from "./data";
import {
   GraphQLObjectType,
   GraphQLInt,
   GraphQLString,
   GraphQLNonNull,
   GraphQLList,
   GraphQLSchema
} from "graphql";


////////////////////////////////////
// Types
////////////////////////////////////

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
   name: "Author",
   description: "An author of a book",
   fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      books: {
         type: new GraphQLList(BookType),
         resolve: (author) => Data.books.filter(book => {
            return book.authorId === author.id
         })
      }
   })
})

const BookType: GraphQLObjectType = new GraphQLObjectType({
   name: "Book",
   description: "A book written by an author",
   fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      authorId: { type: new GraphQLNonNull(GraphQLInt) },
      author: {
         type: AuthorType,
         resolve: (book) => Data.authors.find(author => {
            return author.id === book.authorId
         })
      }
   })
});


////////////////////////////////////
// Queries
////////////////////////////////////

const RootQueryType = new GraphQLObjectType({
   name: "Query",
   description: "Root Query",
   fields: () => ({
      book: {
         type: BookType,
         description: "A Single Book",
         args: {
            id: { type: GraphQLInt }
         },
         resolve: (parent, args) => Data.books.find(book => {
            return book.id === args.id
         })
      },
      books: {
         type: new GraphQLList(BookType),
         description: "List of All Books",
         resolve: () => Data.books
      },
      author: {
         type: AuthorType,
         description: "A Single Author",
         args: {
            id: { type: GraphQLInt }
         },
         resolve: (parent, args) => Data.authors.find(author => {
            return author.id === args.id
         })
      },
      authors: {
         type: new GraphQLList(AuthorType),
         description: "List of All Authors",
         resolve: () => Data.authors
      }
   })
})


////////////////////////////////////
// Mutations
////////////////////////////////////

const RootMutationType = new GraphQLObjectType({
   name: "Mutation",
   description: "Root Mutation",
   fields: () => ({
      addBook: {
         type: BookType,
         description: "Add a Book",
         args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            authorId: { type: new GraphQLNonNull(GraphQLInt) },
         },
         resolve: (parent, args) => {
            const book = {
               id: Data.books.length + 1,
               name: args.name,
               authorId: args.authorId
            };
            Data.books.push(book);
            return book;
         }
      },
      addAuthor: {
         type: AuthorType,
         description: "Add an Author",
         args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
         },
         resolve: (parent, args) => {
            const author = {
               id: Data.authors.length + 1,
               name: args.name,
            };
            Data.authors.push(author);
            return author;
         }
      },
   })
})


////////////////////////////////////
// Schema
////////////////////////////////////

export const schema = new GraphQLSchema({
   query: RootQueryType,
   mutation: RootMutationType
})


/*
Example Query:

   query {
      books {
         name
      }
   }

Example Mutation:

   mutation {
      addBook(name: "The Brand New Book", authorId: 2) {
         name
         author {
            id
            name
         }
      }
   }
*/
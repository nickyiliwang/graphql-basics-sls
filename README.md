# GraphQL-Basics-SLS

Using Nodejs to query countries.trevorblades.com

Basics:

1. type-def: rules, resolvers: worker
2. apollo server in the handler to create an graphql server
3. Query is top level field, can nest fields once defined a Type, ie. User.
4. Using dummy data fakedata.js
5.

https://github.com/machadop1407/graphql-full-course

queryDB:
This is an proxy request made by lambda, we can have predefined query and requested by making API POST call
POST
http://localhost:3000/countries
{"query":"countries"}

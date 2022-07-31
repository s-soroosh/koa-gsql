import Koa from "koa";
import mount from "koa-mount";
const app = new Koa();
import { buildSchema } from 'graphql';

export const SimpleSchema = buildSchema(`
type Query {
    hello: String
}
type Subscription {
    countDown: Int
}
`);

import {graphqlHTTP} from "koa-graphql";

app.use(mount(
    "/graphql",
    graphqlHTTP({
        schema: SimpleSchema,
        graphiql: true
    })
))

app.listen(4000);

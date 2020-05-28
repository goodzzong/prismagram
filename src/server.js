require("dotenv").config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';
import "./passport";
import { authenticateJwt } from './passport';

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({ schema, context: ({ request }) => ({ request }) }); // context 는 resolver 사이에서 정보를 공유할 때 사용.

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({port: PORT }, () => 
	console.log(`✅Server is running on localhost:${PORT}`)
);
require("dotenv").config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';
import { sendSecretMail } from "./utils/functions";

sendSecretMail("goodzzong@gmail.com", "123");

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({port: PORT }, () => 
	console.log(`✅Server is running on localhost:${PORT}`)
);
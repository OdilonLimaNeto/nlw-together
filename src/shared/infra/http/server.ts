import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import { router } from './routes';

import "../../container"

import { createConnection } from "typeorm";

import { ApplicationError } from "../../appErrors/AplicationError";

createConnection();
const server = express();
server.use(cors());
server.use(express.json());
server.use(router);

server.use(
    (err: Error, request: Request, response: Response, Next: NextFunction) => {
        if(err instanceof ApplicationError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "Error",
            message: `Internal server error = ${err.message}`,
        });
    }
);

server.listen(3333, () => {
    console.log('Server is running');
});
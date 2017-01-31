/// <reference path="./node_modules/@types/node/index.d.ts" />

import * as Http from 'http';
/**
 * Created by gjrwcs on 1/31/2017.
 */
const port : number = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req : Http.IncomingMessage, response : Http.ServerResponse) => {
    console.log(req.url);
};

Http.createServer(onRequest).listen(port);
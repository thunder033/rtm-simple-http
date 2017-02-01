/// <reference path="../node_modules/@types/node/index.d.ts" />
/**
 * Created by gjrwcs on 1/31/2017.
 */
import * as Http from 'http';

import {HtmlHandler} from './htmlResponses';
import {ImageHandler} from './imageResponses';
import {JsonHandler} from './jsonResponses';
import {TextHandler} from './textResponses';

const port: number = process.env.PORT || process.env.NODE_PORT || 3000;

const htmlHanlder = new HtmlHandler();
const imageHandler = new ImageHandler();
const jsonHandler = new JsonHandler();
const textHandler = new TextHandler();

const onRequest = (req: Http.IncomingMessage, response: Http.ServerResponse) => {
    console.log(req.url);

    switch (req.url) {
        case '/':
            return htmlHanlder.getIndex(req, response);
        case '/page2':
            return htmlHanlder.getPage2(req, response);
        case '/hello':
            return textHandler.getHello(req, response);
        case '/time':
            return textHandler.getTime(req, response);
        case '/helloJSON':
            return jsonHandler.getHelloJSON(req, response);
        case '/timeJSON':
            return jsonHandler.getTimeJSON(req, response);
        case '/dankmemes':
            return imageHandler.getDankMeme(req, response);
        default:
            return htmlHanlder.getIndex(req, response);
    }
};

Http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1:${port}`);

/**
 * Created by gjrwcs on 2/1/2017.
 */

import * as Http from 'http';
import {TextHandler} from './textResponses';

const textHandler = new TextHandler();

export class JsonHandler {

    public getHelloJSON(request: Http.IncomingMessage, response: Http.ServerResponse): void {
        const helloJSON: Object = {
            message: textHandler.greeting,
        };

        const message: string = JSON.stringify(helloJSON);

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(message);
        response.end();
    }

    public getTimeJSON(request: Http.IncomingMessage, response: Http.ServerResponse): void {
        const timeJSON: Object = {
            message: textHandler.getTimeString(),
        };

        const message: string = JSON.stringify(timeJSON);

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(message);
        response.end();
    }
}

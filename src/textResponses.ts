/**
 * Created by gjrwcs on 2/1/2017.
 */

import * as Http from 'http';

export class TextHandler {
    public greeting: string;

    constructor() {
        this.greeting = 'Hello World';
    }

    public getTimeString(): string {
        const d: Date = new Date();
        return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }

    public getTime(request: Http.IncomingMessage, response: Http.ServerResponse): void {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(this.getTimeString());
        response.end();
    }

    public getHello(request: Http.IncomingMessage, response: Http.ServerResponse): void {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(this.greeting);
        response.end();
    }
}

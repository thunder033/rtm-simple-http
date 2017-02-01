/**
 * Created by gjrwcs on 2/1/2017.
 */

import * as fs from 'fs';
import * as Http from 'http';

export class HtmlHandler {
    private index: Buffer;
    private page2: Buffer;

    constructor() {
        this.index = fs.readFileSync(`${__dirname}/../client/client.html`);
        this.page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
    }

    public getIndex(request: Http.IncomingMessage, response: Http.ServerResponse) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(this.index);
        response.end();
    }

    public getPage2(request: Http.IncomingMessage, response: Http.ServerResponse) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(this.page2);
        response.end();
    }
}

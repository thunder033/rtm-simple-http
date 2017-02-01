/**
 * Created by gjrwcs on 2/1/2017.
 */

import * as fs from 'fs';
import * as Http from 'http';

export class ImageHandler {
    private dankMeme: Buffer;

    constructor() {
        this.dankMeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);
    }

    public getDankMeme(request: Http.IncomingMessage, response: Http.ServerResponse): void {
        response.writeHead(200, {'Content-Type': 'image/png'});
        response.write(this.dankMeme);
        response.end();
    }
}

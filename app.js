// const fs = require('fs');
// const path = require('path');
// const student = require('./one.json');
// const csv = require('csv-parser');
// const results = [];
const http = require('http');
const url = require('url');
const { parse } = require('querystring');

http.createServer( (request, response) => {
    console.log('server work');
    if (request.method == 'GET') {
        console.log(request.method);
        let urlRequest = url.parse(request.url, true);
        // console.log(urlRequest);
        console.log(urlRequest.query.test);
        if (urlRequest.query.test > 10) {
            response.end('even');
        }
        response.end('odd');
    } else {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params)
            console.log(params.hi)
            response.end('ok');
        });
    }
}).listen(3000);


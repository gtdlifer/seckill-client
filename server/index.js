const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path');

app.use(serve(path.join(__dirname, '../dist')))

app.use(serve(path.join(__dirname, '../static')))

app.use(serve(path.join(__dirname, '../')))

app.listen(3030);

console.log('listening on port 3030')
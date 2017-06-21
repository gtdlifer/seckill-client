const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve(__dirname + '/static'))

app.use(serve(__dirname + '/'))

app.listen(3030);

console.log('listening on port 3030')
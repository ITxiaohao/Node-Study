const Koa = require('koa');

const app = new Koa();

// app.use(async (ctx, next) => {
//     console.log(`${ctx.request.method} ${ctx.request.url}`);
//     await next();
// })

// app.use(async(ctx, next) => {
//     console.log('项目 1 开始');
//     await next();
//     console.log('项目 1 结束');
// })

// app.use(async(ctx, next) => {
//     console.log('项目 2 开始');
//     await next();
//     console.log('项目 2 结束');
// })

// app.use(async(ctx, next) => {
//     console.log('项目 3 开始');
//     await next();
//     console.log('项目 3 结束');
// })

// app.use(async (ctx, next) => {
//     const start = new Date().getTime();
//     await next();
//     const ms = new Date().getTime() - start;
//     console.log(`Time: ${ms}ms`);
// })

// 对于任何请求，app将调用该异步函数处理请求
app.use(async (ctx, next) => {
    await next();
    // 设置response的Content-Type:
    ctx.response.type = 'text/html';
    // 设置response的内容:
    ctx.response.body = '<h1>Hello Koa2</h1>'
})

app.listen(3000);
console.log('http://localhost:3000');

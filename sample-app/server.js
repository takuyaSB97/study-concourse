const http = require("http");
const app = http.createServer((request, response) => {
  const _url = request.url;
  const fullUrl = new URL("http://localhost:3000" + _url);
  const pathName = fullUrl.pathname;

  if (pathName === "/") {
    response.writeHead(200, { "Content-Type": "text/html;charset= utf-8" });
    response.end(`<h1>Hello World!</<h1>`);
    console.log(new Date() ,"アクセス成功");
  }
});

app.listen(3000, () => {
  //port 3000でサーバ起動
  console.log("サーバURL: http://localhost:3000");
});

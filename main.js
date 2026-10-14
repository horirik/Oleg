const { app, BrowserWindow } = require("electron");
const http = require("http"), fs = require("fs"), path = require("path");
const PORT = 38211; // для Google OAuth: добавь http://127.0.0.1:38211 в Authorized JavaScript origins
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css" };
app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
function serve() {
  return new Promise(res => {
    http.createServer((req, rsp) => {
      let p = req.url.split("?")[0]; if (p === "/") p = "/index.html";
      const f = path.join(__dirname, "www", path.normalize(p).replace(/^(\.\.[\/\\])+/, ""));
      fs.readFile(f, (e, d) => {
        if (e) { rsp.writeHead(404); return rsp.end(); }
        rsp.writeHead(200, { "Content-Type": types[path.extname(f)] || "application/octet-stream" }); rsp.end(d);
      });
    }).listen(PORT, "127.0.0.1", res);
  });
}
app.whenReady().then(async () => {
  await serve();
  const w = new BrowserWindow({ width: 960, height: 660, autoHideMenuBar: true, title: "Music" });
  w.loadURL(`http://127.0.0.1:${PORT}/`);
});
app.on("window-all-closed", () => app.quit());

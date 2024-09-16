import http from "http";
import handler from "serve-handler";

const server = http.createServer((req, res) => {
  return handler(req, res, {
    cleanUrls: true,
    public: "dist",
    directoryListing: false,
    unlisted: [".*"],
  });
});

server.listen(3000, () => {
  console.info("Server started at http://localhost:3000");
});

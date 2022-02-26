"use strict";
var fs = require("fs");

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    options: {
      cors: true,
    },
    handler: async (request, h) => {
      try {
        function base64_encode(file) {
          var bitmap = fs.readFileSync("./test.jpg", { encoding: "base64" });
          return bitmap
        }
        let image = base64_encode("./test.jpg");
        return image;
      } catch (err) {
        console.log(err);
      }
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

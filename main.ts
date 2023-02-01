import { serveDir } from "https://deno.land/std@0.175.0/http/file_server.ts";

// ...
serveDir(new Request("/static"), {
  fsRoot: "public",
  urlRoot: "static",
});

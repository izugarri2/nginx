import { serve } from "https://deno.land/std@0.175.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.175.0/http/file_server.ts";

serve((req) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "/static",
    });
  }
  // Do dynamic responses
  return new Response();
});

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Send static content
app.use(async context => {
  await send(context, context.request.path, {
    root: `${Deno.cwd()}/static`,
    index: "index.html"
  });
});

const address = "127.0.0.1:8000";
console.log(bold("Start listening on ") + yellow(address));
await app.listen({ port: 8000 });

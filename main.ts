import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Send static content
app.use(async context => {
  await send(context, context.request.path, {
    root: `${Deno.cwd()}/static`,
    index: "index.html"
  });

await app.listen({ port: 8000 });

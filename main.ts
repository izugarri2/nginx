import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
app.use(async (ctx) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}`,
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "404 - No found - Página no encontrada";
  }
});

await app.listen({ port: 8000 });

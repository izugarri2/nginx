import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
app.use(async (ctx) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}`,
      index: "index.html",
    });
  } 
});

await app.listen({ port: 8000 });

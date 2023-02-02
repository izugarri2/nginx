import { Application, HttpError, send, Status } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Error handler middleware
app.use(async (context, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpError) {
      context.response.status = e.status as any;
      if (e.expose) {
        context.response.body = `<!DOCTYPE html>
        <html>
            <body>
            <h1>${e.status} - ${e.message}</h1>
            </body>
        </html>`;
      } else {
        context.response.body = `<!DOCTYPE html>
        <html>
            <body>
            <h1>${e.status} - ${Status[e.status]}</h1>
            </body>
        </html>`;
      }
    } else if (e instanceof Error) {
      context.response.status = 500;
      context.response.body = `<!DOCTYPE html>
        <html>
            <body>
            <h1>500 - Internal Server Error</h1>
            </body>
        </html>`;
      console.log("Unhandled Error:", (e.message));
      console.log(e.stack);
    }
  }
});

// Send static content
app.use(async context => {
  await send(context, context.request.path, {
    root: `${Deno.cwd()}`,
    index: "index.html"
  });
});

await app.listen({ port: 8000 });

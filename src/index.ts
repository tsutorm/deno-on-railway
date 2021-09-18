import { listenAndServe, bold, yellow } from "../deps.ts"
const port = parseInt(Deno.env.get("PORT") ?? "8000")

listenAndServe(`:${port}`, () => new Response("Choo Choo! Welcome to your Deno app\n"))

console.log(bold("Start HTTP server on ") + yellow(`http://localhost:${port}/`))

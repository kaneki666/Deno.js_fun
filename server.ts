import { serve } from "https://deno.land/std@v0.30.0/http/server.ts";
//read file
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("my.txt");
console.log(decoder.decode(data));
//copy any file
await Deno.copyFile("my.txt", "copy.txt");

const orig = Deno.applySourceMap({
  location: "file:/server.ts",
  line: 5
});
console.log(`${orig.filename}:${orig.line}`);

const server = serve({ port: 8000 });
console.log(`Server running at 8000`);
for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}

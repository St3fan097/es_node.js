import { writeFile } from "node:fs";
import { Buffer } from "node:buffer";


const word1 = Buffer.from("Hello", "utf-8");
const space = Buffer.from(" ", "utf-8")
const word2 = Buffer.alloc(5);
word2.write("World", 0, 5, "utf-8");

const data = Buffer.concat([word1,space,word2]).toString();

writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log(data);
});
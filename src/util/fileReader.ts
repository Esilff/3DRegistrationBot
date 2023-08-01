import "fs";
import { readFile } from "fs/promises";

async function readJSON(path : string) : Promise<JSON|null> {
    let data : JSON|null = null;
    await readFile(path).then((buffer : Buffer) => {
        data = JSON.parse(buffer.toString());
    });
    return data;
}

export {readJSON};

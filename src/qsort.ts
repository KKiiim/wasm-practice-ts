import fs from "node:fs";

async function getResult() {
    const mydir = __dirname + "/../build/myqsort.wasm";
    const content = await fs.promises.readFile(mydir);
    
    const module = await WebAssembly.instantiate(content);
    const myqsort = module.instance.exports.myqsort as CallableFunction;
    const getter = module.instance.exports.getter as CallableFunction;

    const jsArray = [5, 1, 3, 2, 4, 0];
    myqsort(jsArray);
    const afterSort = [];
    for(let i = 0; i < jsArray.length; i++){
        afterSort[i] = getter(i);
    }


    return {jsArray};
}
export const processor = {getResult};
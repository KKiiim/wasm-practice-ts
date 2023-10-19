import assert from "node:assert";
import { processor } from "../src/qsort.js";
import { test, suite } from "mocha";
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
suite("qsort", () => {
  test("qsort", async () => {
    const result = (await processor.getResult()).jsArray;
    const rArray = [0, 1, 2, 3, 4, 5];
    for(let i = 0; i < rArray.length; i++){
        assert.strictEqual(result[i], rArray[i]);
    }
  });
});
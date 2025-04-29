// in this function if the val is array of string or number, then we should check it too; that is the thing that we should be careful of ; and we should check it as object
function detectType(val: number | string) {
  if (typeof val === "string") return val.toLowerCase();
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

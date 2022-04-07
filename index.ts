// TypeScript, ECMA Script

let v: string | number = 1;

v = "a";

v = true;

async function PromiseExampleFunction()
{
   return new Promise((resolve, reject) =>
   {
      setTimeout(() => { resolve(true); }, 1000);
      setTimeout(() => { reject(false); }, 2000);
   });
}

async function main()
{
   PromiseExampleFunction().then((b) => { console.log(b); }).catch((b) => { console.log(b); });
}

main();
// TypeScript, ECMA Script
// 잘 지내시나요? 건강하세요!


// # 1. What is Type?
{
   let v: string | number = 1;
   let type: "string" | "number" | "unknown" = "unknown";

   switch (typeof v)
   {
      case "string":
         type = "string";
         break;

      case "number":
         type = "number";
         break;

      default:
         type = "unknown";
         break;
   }

   console.log(`Type is ${ type }`);
}

// # 2. Promise and Async/Await
{
   async function PromiseExampleFunction()
   {
      return new Promise<boolean>((resolve, reject) =>
      {
         setTimeout(() => { resolve(true); }, 1000);
         setTimeout(() => { reject(false); }, 2000);
      });
   }

   async function main()
   {
      PromiseExampleFunction().then((v: boolean) =>
      {
         console.log(`resolved: ${ v }`);

      }).catch((v: boolean) =>
      {
         console.log(`rejected: ${ v }`);
      });
   }

   async () => { await main(); };
}


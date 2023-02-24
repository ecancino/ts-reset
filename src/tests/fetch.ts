import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(async () => {
  const result = await fetch("/").then((res) => res.json());

  type tests = [Expect<Equal<typeof result, unknown>>];
});

doNotExecute(async () => {
  type Named = { name: string };

  const result = await fetch("/").then((res) => {
    return res.json<Named>();
  });

  type tests = [Expect<Equal<typeof result, Named>>];
});

import { init, exit } from "./myPackage";

init({ debug: true, url: "test" });
//init(config: { debug: boolean; url: string; }): boolean

exit(1);
//(alias) exit(code: number): number

import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./ts-ext.mjs", pathToFileURL("./scripts/"));

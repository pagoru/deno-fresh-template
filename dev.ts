#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import sass from 'sass';

const compile = sass(["./styles/styles.scss"]);
const str = compile.to_string();
const data = `/* DO NOT EDIT. This file is generated. */\n${str.get('styles')}`
Deno.writeTextFileSync('./static/styles.min.css', data)

await dev(import.meta.url, "./main.ts");

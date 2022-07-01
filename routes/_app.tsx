/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import {AppProps, Handlers} from "$fresh/server.ts";

export default (props: AppProps) => {
  return (
    <>
      <Head>
        <title>Deno Fresh Template</title>
        <link rel="stylesheet" href="./styles.min.css"/>
      </Head>
      <main>
        <props.Component />
      </main>
    </>
  );
}
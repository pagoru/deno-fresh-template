/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import {Handlers, PageProps} from "$fresh/src/server/types.ts";
import Form from "../islands/Form.tsx";

export default () => {
  return (
    <>
      <h4>
        Deno Fresh Template
      </h4>
      <img src="img.svg"/>
      <Form/>
    </>
  );
}

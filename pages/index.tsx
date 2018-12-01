import Head from "next/head";
import * as React from "react";

export default class Index extends React.Component {
  public render() {
    return (
      <div>
        <Head>
          <title>Battle Buddy</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      </div>
    );
  }
}

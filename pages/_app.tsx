import React from "react";
import App, { Container } from "next/app";
import { injectGlobal, css } from "emotion";

injectGlobal`
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Lato:400,900')
  }
  * {
    font-family: 'Lato', sans-serif;
    color: #FFF;
  }
  body {
    background: #161935;
    margin: 0;
  }
  h1 {
    font-size: 1.75em;
  }
`;

const wrapper = css`
  max-width: 63%;
  margin: auto;
`;

export default class BattleBuddy extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className={wrapper}>
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

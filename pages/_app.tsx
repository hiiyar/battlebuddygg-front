import React from 'react';
import App, { Container } from 'next/app';
import { injectGlobal, css } from 'emotion';

injectGlobal `
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Lato:400,900')
  }
  * {
    font-family: 'Lato', sans-serif;
  }
  body {
    background: #161935;
    margin: 0;
  }
`;

const wrapper = css`
  max-width: 65%;
  margin: auto;
`;

export default class MyApp extends App {
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
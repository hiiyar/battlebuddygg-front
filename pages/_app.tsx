import React from "react";
import App, { Container } from "next/app";
import { injectGlobal, css } from "emotion";
import { ApolloProvider } from "react-apollo";
import withApolloClient from "../lib/with-apollo-client";

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

  /* width */
  ::-webkit-scrollbar {
      width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 30px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.5);
  }
`;

const wrapper = css`
  max-width: 80%;
  margin: auto;
`;

class BattleBuddy extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <div className={wrapper}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </div>
      </Container>
    );
  }
}

export default withApolloClient(BattleBuddy);

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

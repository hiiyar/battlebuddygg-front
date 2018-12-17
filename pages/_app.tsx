import React from "react";
import App, { Container } from "next/app";
import { injectGlobal, css } from "emotion";
import { ApolloProvider } from "react-apollo";
import withApolloClient from "../lib/with-apollo-client";
import Loader from "../src/components/shared/loader";
import { setup } from "../src/rxjs-operators";

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
    background: radial-gradient(#272C55, #0C0E1D);
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
  input {
    margin: 10px 0;
    padding: 10px 20px;
    background: transparent;
    border: 3px solid #3A4C9F;
    border-radius: 17px;
    font-size: 1.25rem;
    &::placeholder {
      color: #556CD3;
      font-weight: bold;
    }
  }
  button, input {
    &:focus {
      outline: none;
    }
  }
`;

const wrapper = css`
  max-width: 80%;
  margin: auto;
`;

class BattleBuddy extends App {
  loader: Loader;

  componentDidMount() {
    setup(this.loader);
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <Loader ref={ref => (this.loader = ref)} />
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

import * as React from 'react';
import { css } from 'emotion';

export interface IProps {
  text: string;
  style: 'outlined' | 'bright';
}

const buttonOutlined = css`
  background: linear-gradient(52deg, #75EBD6 8%, #0093E9 100%) ;
  border: none;
  border-radius: 50px;
  display: inline-block;
  font-size: 1em;
  padding: 2px;
  text-decoration: none;
  cursor: pointer;
  span {
    background: #161935;
    display: block;
    padding: 6px 25px;
    border-radius: 50px;
    font-weight: 900;
  }
`;

class ButtonOutlined extends React.Component<IProps> {
  public render() {
    const { text } = this.props;
    return (
      <button className={buttonOutlined}>
        <span>{text}</span>
      </button>
    );
  }
}

const buttonBright = css`
  background: linear-gradient(52deg, #75EBD6 8%, #0093E9 100%);
  box-shadow: 0px 8px 20px rgba(117, 235, 214, 0.5);
  font-size: 1em;
  font-weight: 900;
  text-transform: uppercase;
  padding: 8px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

class ButtonBright extends React.Component<IProps> {
  public render() {
    const { text } = this.props;
    return (
      <button className={buttonBright}>
        <span>{text}</span>
      </button>
    );
  }
}

export default class Button extends React.Component<IProps> {
  public render() {
    const { style } = this.props;

    if (style === 'outlined') {
      return (
        <ButtonOutlined {...this.props} />
      );
    }

    if (style === 'bright') {
      return (
        <ButtonBright {...this.props} />
      );
    }

    return null;
  }
}

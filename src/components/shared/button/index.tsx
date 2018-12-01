import * as React from "react";
import { css } from "emotion";

export interface IProps {
  text: string;
  style?: "outlined" | "bright";
  onClick?: Function;
  disableShadow?: boolean;
}

const buttonOutlined = css`
  background: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
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
  handleClick = () => {
    this.props.onClick();
  };

  public render() {
    const { text } = this.props;
    return (
      <button className={buttonOutlined} onClick={this.handleClick}>
        <span>{text}</span>
      </button>
    );
  }
}

const buttonBright = css`
  background: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
  box-shadow: 0px 8px 20px rgba(117, 235, 214, 0.5);
  font-size: 1em;
  font-weight: 900;
  text-transform: uppercase;
  padding: 8px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

class ButtonBright extends React.Component<IProps> {
  handleClick = () => {
    this.props.onClick();
  };

  public render() {
    const { text } = this.props;
    return (
      <button className={buttonBright} onClick={this.handleClick}>
        <span>{text}</span>
      </button>
    );
  }
}

const button = css`
  background: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.2em;
  font-weight: 900;
  cursor: pointer;
`;

const shadow = css`
  box-shadow: 0px 10px 30px rgba(117, 235, 214, 0.5);
`;

export default class Button extends React.Component<IProps> {
  handleClick = () => {
    this.props.onClick();
  };

  public render() {
    const { style, disableShadow } = this.props;

    if (style === "outlined") {
      return <ButtonOutlined {...this.props} />;
    }

    if (style === "bright") {
      return <ButtonBright {...this.props} />;
    }

    const { text } = this.props;

    return (
      <button className={`${button} ${!disableShadow ? shadow : ""}`} onClick={this.handleClick}>
        <span>{text}</span>
      </button>
    );
  }
}

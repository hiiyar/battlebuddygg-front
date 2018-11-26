import * as React from "react";
import { Dialog } from "evergreen-ui";
import { css } from "emotion";

interface IProps {
  isShown: boolean;
  onClose: Function;
}

const modal = css`
  background-color: #252e54;
  border-image: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
  border-image-slice: 1;
  border-width: 3px;
  border-style: solid;
  box-shadow: 0px 0px 14px rgba(0, 147, 233, 0.5);
  padding: 0 10% 1%;
  & > div:first-of-type {
    padding: 50px 0 0;
    border: none;
    h4 {
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 30px;
      &:after {
        content: "";
        background: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
        border-radius: 10px;
        width: 80px;
        height: 12px;
        display: block;
        margin: 22px auto 0;
      }
    }
    button {
      background: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      bottom: 75px;
      left: 213px;
      svg {
        fill: #fff !important;
      }
      &:active {
        background: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%) !important;
      }
    }
  }
`;

export default class Modal extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.state = { isShown: false };
  }

  handleClose = () => {
    this.props.onClose();
  };

  public render() {
    return (
      <Dialog
        isShown={this.props.isShown}
        onCloseComplete={this.handleClose}
        title="BattleBuddy Loot"
        hasFooter={false}
        width={"80%"}
        topOffset={25}
        containerProps={{
          className: modal,
        }}
      >
        <span>{this.props.children}</span>
      </Dialog>
    );
  }
}

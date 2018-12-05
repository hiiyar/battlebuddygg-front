import React, { PureComponent } from "react";
import { Spinner } from "evergreen-ui";
import { css } from "emotion";

interface IState {
  refs: string[];
}

interface IProps {
  classes?: any;
}

const loader = css`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const spinner = css`
  width: 100px;
  heigth: 100px;
  svg circle {
    stroke: #0093e9;
  }
`;

export default class Loader extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { refs: [] };
  }

  show = (ref: string): void => {
    if (typeof ref !== "string") {
      throw new Error("Loader.show needs a ref string value");
    }

    const { refs } = this.state;
    if (refs.includes(ref)) return;

    this.setState({ refs: [...refs, ref] });
  };

  hide = (ref: string): void => {
    if (typeof ref !== "string") {
      throw new Error("Loader.hide needs a ref string value");
    }

    const { refs } = this.state;
    const index = refs.indexOf(ref);
    if (index === -1) return;

    refs.splice(index, 1);
    this.setState({ refs: [...refs] });
  };

  handleRequestClose = () => {};

  render(): JSX.Element {
    const { refs } = this.state;

    return !!refs.length ? (
      <div className={loader}>
        <Spinner className={spinner} />
      </div>
    ) : null;
  }
}

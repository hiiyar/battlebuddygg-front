import * as React from "react";
import { css } from "emotion";
import Button from "../shared/button";
import authService from "../../services/auth";
import Router from "next/router";
import rxjsOperators from "../../rxjs-operators/index";

interface IState {
  selectedIndex: number;
  tabs: string[];
  email: string;
  password: string;
}

const container = css`
  height: 100vh;
  display: flex;
`;

const wrapper = css`
  width: 450px;key={tab}
  background: #1A1D36;
  border: 2px solid #3D4776;
  margin: auto;
  height: auto;
  padding: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 25px;
`;

const logo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-size: 1.3em;
`;

const logoImage = css`
  padding: 0 0 20px 0;
  width: 50px;
`;

const text = css`
  span {
    color: #24abff;
  }
`;

const form = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 32px 0 0;
  input {
    width: 91%;
  }
`;

const button = css`
  width: 130px;
  padding: 8px 0;
`;

const tablist = css`
  padding: 40px 0 0;
  display: flex;
`;

const tabAppearance = css`
  background: transparent;
  border-radius: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #556cd3;
  cursor: pointer;
  padding: 0px 40px 20px;
  margin: 0;
`;

const tabSelected = css`
  color: #fff;
  border-bottom: 7px solid;
  border-image-source: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
  border-image-slice: 7;
  box-sizing: border-box;
`;

const loginAccount = css`
  text-align: center;
  font-weight: 900;
  font-size: 1.25rem;
  padding-top: 25px;
  width: 190px;
`;

const externalLoginButtons = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  img {
    cursor: pointer;
  }
`;

export default class Login extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      selectedIndex: 0,
      tabs: ["Log In", "Sign Up"],
    };
  }

  onChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = async () => {
    authService
      .login(this.state.email, this.state.password)
      .pipe(rxjsOperators.loader())
      .subscribe(() => {
        Router.push("/");
      });
  };

  render() {
    return (
      <div className={container}>
        <div className={wrapper}>
          <div className={logo}>
            <img className={logoImage} src="/static/images/logo.png" alt="BattleBuddy.GG" />
            <div className={text}>
              BATTLEBUDDY.
              <span>GG</span>
            </div>
          </div>
          <div className={tablist}>
            {this.state.tabs.map((tab, index) => (
              <div
                key={tab}
                id={tab}
                onClick={() => this.setState({ selectedIndex: index })}
                className={`${tabAppearance} ${
                  index === this.state.selectedIndex ? tabSelected : ""
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
          {this.state.selectedIndex === 0 ? (
            <div className={form}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
              />

              <div className={button}>
                <Button text="Log In" disableShadow onClick={this.login} />
              </div>

              <div className={loginAccount}>
                <span>Or</span>
                <div className={externalLoginButtons}>
                  <img src="/static/images/facebook.png" alt="Login with Facebook account" />
                  <img src="/static/images/google.png" alt="Login with Google account" />
                  <img src="/static/images/discord.png" alt="Login with Discord account" />
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

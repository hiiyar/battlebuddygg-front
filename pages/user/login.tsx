import * as React from 'react';
import authService from '../../src/services/auth';
import rxjsOperators from '../../src/rxjs-operators';

export interface IProps {
  token: string;
}

export interface IState {
  email: string;
  password: string;
}

export default class Index extends React.Component<IProps, IState> {

  static async getInitialProps() {
    return {};
  }

  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { email: '', password: '' }
  }

  public isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  public submit = () => {
    authService.login(this.state.email, this.state.password).pipe(
      rxjsOperators.switchMap(() => authService.isAuthenticated())
    ).subscribe(isAuthenticated => alert('Authenticated: ' + isAuthenticated));
  }

  public handleChange(e: any) {
    this.setState({ [e.target.id]: e.target.value });
  }

  public logout() {
    authService.logout()
      .subscribe(() => alert('Logout'));
  }

  public getUser() {
    authService.getUser()
      .subscribe(user => {
        console.log('user', user);
      })
  }

  public render() {
    return (
      <div>
        <h1>Login Page</h1>
        <fieldset>
          <label htmlFor='email'>E-mail</label><br/>
          <input id='email' type='email' value={this.state.email} onChange={this.handleChange}/>
          <br/>
          <br/>
          <label htmlFor='password'>Password</label><br/>
          <input id='password' type='password' value={this.state.password} onChange={this.handleChange}/>
          <br/>
          <br/>
          <button onClick={this.submit}>Login</button><br/><br/>
          <button onClick={this.logout}>Logout</button><br/><br/>
          <button onClick={this.getUser}>Get User</button>
        </fieldset>
        <br/>
        <small>Rendering by: {this.isClientOrServer()}</small>
      </div>
    )
  }
}

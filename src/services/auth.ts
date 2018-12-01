import * as rxjs from "rxjs";
import { IUser, ILoginResponse } from "../interfaces/user";
import apiService, { ApiService } from "./api";
import tokenService, { TokenService } from "./token";
import rxjsOperators from "../rxjs-operators";
import login from "../../graphql/login";

export class AuthService {
  private user$: rxjs.Observable<Readonly<IUser>>;

  constructor(private api: ApiService, private tokenService: TokenService) {
    this.user$ = this.tokenService.getToken().pipe(
      rxjsOperators.map(token => {
        if (!token) {
          return null;
        }

        const user = this.tokenService.decode<IUser>(token);
        if (!user) {
          return null;
        }

        return user;
      }),
      rxjsOperators.catchError(() => {
        return rxjs.of(null);
      }),
      rxjsOperators.shareReplay(1)
    );
  }

  public login(email: string, password: string): rxjs.Observable<any> {
    return this.api.query(login, { email, password }).pipe(
      rxjsOperators.switchMap((response: ILoginResponse) =>
        tokenService.setToken(response.login.token)
      ),
      rxjsOperators.tap(() => console.log("Login efetuado com sucesso!"))
    );
  }

  public logout(): rxjs.Observable<void> {
    return this.tokenService.clearToken();
  }

  public getUser(): rxjs.Observable<Readonly<IUser>> {
    return this.user$;
  }

  public isAuthenticated(): rxjs.Observable<boolean> {
    return this.tokenService.getToken().pipe(rxjsOperators.map(token => !!token));
  }
}

const authService = new AuthService(apiService, tokenService);
export default authService;

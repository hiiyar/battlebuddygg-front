import * as rxjs from 'rxjs';
import axios, { AxiosError } from 'axios';
import { API_ENDPOINT } from '../settings';
import tokenService, { TokenService } from './token';
import rxjsOperators from '../rxjs-operators';

export class ApiService {
  constructor(private apiEndpoint: string, private tokenService: TokenService) {  }

  public get(url: string, params?: any): rxjs.Observable<any> {
    return this.request('GET', url, params);
  }

  public post(url: string, body: any): rxjs.Observable<any> {
    return this.request('POST', url, body);
  }

  private request(method: string, url: string, data: any = null): rxjs.Observable<any> {
    return this.tokenService.getToken().pipe(
      rxjsOperators.first(),
      rxjsOperators.map(token => token ? { Authorization: `Bearer ${token}` } : null),
      rxjsOperators.switchMap(headers => {
        return axios.request({
          baseURL: this.apiEndpoint,
          url,
          method,
          timeout: 30000,
          headers: {
            'Content-type': 'application/json',
            ...headers
          },
          params: method === 'GET' ? data : null,
          data: method === 'POST' ? data : null
        });
      }),
      rxjsOperators.map(res => res.data),
      rxjsOperators.catchError(err => this.handleError(err))
    );
  }

  private handleError(err: AxiosError) {
    return rxjs.throwError(err);
  }
}

const apiService = new ApiService(API_ENDPOINT, tokenService);
export default apiService;
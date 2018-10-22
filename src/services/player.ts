import * as rxjs from 'rxjs';
import { IPlayer } from '../interfaces/integration';
import apiService, { ApiService } from './api';

export class PlayerService {
  private player$: rxjs.BehaviorSubject<IPlayer>;

  constructor(private api: ApiService) {
    this.player$ = new rxjs.BehaviorSubject({});
  }

  public async get() {
    const req = this.api.get('/player').toPromise();
    return req;
  }

  public setPlayer(player: IPlayer) {
    this.player$.next(player);
  }

  public getPlayer(): rxjs.Observable<any> {
    return this.player$.asObservable();
  }
}

const playerService = new PlayerService(apiService);
export default playerService;
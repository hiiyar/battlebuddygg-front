import * as rxjs from "rxjs";
import { IItems } from "../interfaces/lootBox";
import apiService, { ApiService } from "./api";
import lootBoxRouletteItems from "../../graphql/lootBoxRouletteItems";
import rxjsOperators from "../rxjs-operators";

export class LootBoxService {
  private rouletteItems$: rxjs.BehaviorSubject<IItems[]>;

  constructor(private api: ApiService) {
    this.rouletteItems$ = new rxjs.BehaviorSubject(null);
  }

  public loadRouletteItems(idUserLootBox: string): rxjs.Observable<IItems[]> {
    return this.api.query(lootBoxRouletteItems, { idUserLootBox: idUserLootBox }).pipe(
      rxjsOperators.map(rouletteItems => rouletteItems.roulette.items),
      rxjsOperators.switchMap((rouletteItems: IItems[]) => {
        this.rouletteItems$.next(rouletteItems);
        return this.rouletteItems$;
      })
    );
  }

  public getRouletteItems(): rxjs.Observable<IItems[]> {
    return this.rouletteItems$;
  }
}

const lootBoxService = new LootBoxService(apiService);
export default lootBoxService;

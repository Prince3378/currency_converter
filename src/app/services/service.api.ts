import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CurrencyType} from "src/app/types/currancyType";

@Injectable()
export class ExchangeService {

  private _URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(
    private httpClient: HttpClient,
  ) {}

  getExchangeRate() {
    return this.httpClient.get<CurrencyType[]>(this._URL);
  }
}
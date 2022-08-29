import { Component } from '@angular/core';
import { CurrencyType } from 'src/app/types/currancyType';
import { ExchangeService } from './services/service.api';

@Component({
  selector: 'app-root',
  template: `

  <div class="content is-large is-centered">
    Конвертер валют
  </div>

  <app-header [currencies] = "currencies"></app-header>

  <app-converter [currencies] = "currencies"></app-converter>

  `,
  styles: []
})
export class AppComponent {
  title = 'currency_converter';

  currencies: CurrencyType[] = [];

  constructor(
    private exchangeService: ExchangeService,
  ) {}

  ngOnInit() {
    this.exchangeService.getExchangeRate()
      .subscribe(data => 
        this.currencies = [
          {
            rate: "1",
            cc: "UAH",
          },
        ...data.filter(curr => (curr.cc === "EUR" || curr.cc === "USD")),
        ]
      )
  }
}

import { Component, Input } from '@angular/core';
import { CurrencyType } from '../types/currancyType';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  @Input()
  listCurrenciesFromServer: CurrencyType[] = [];

  give = 1;
  receive = 1;

  public giveRate = 1;
  public receiveRate = 1;

  public flagEnter = 'UAH';
  public flagExit = 'UAH';

  enterInput(event: any) {
    this.give = event.target.value;
    this.receive = +(event.target.value * (this.giveRate / this.receiveRate)).toFixed(2);
  }

  exitInput(event: any) {
    this.receive = event.target.value;
    this.give = +(event.target.value * (this.receiveRate / this.giveRate)).toFixed(2);
  }

  calculateEnterRate(event: any) {
    this.flagEnter = `${event.target.value}`

    this.listCurrenciesFromServer.map(currency => {
      if (event.target.value === currency.cc) {
        this.giveRate = +currency.rate;
        this.receive = +(this.give * (+currency.rate / this.receiveRate)).toFixed(2)
      }
    })
  }

  calculateExitRate(event: any) {
    this.flagExit = `${event.target.value}`

    this.listCurrenciesFromServer.map(currency => {
      if (event.target.value === currency.cc) {
        this.receiveRate = +currency.rate;
        this.receive = +(this.give * (this.giveRate / +currency.rate)).toFixed(2)
      }
    })
  }
}

import { Component, Input } from '@angular/core';
import { CurrencyType } from 'src/app/types/currancyType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  currencies: CurrencyType[] = [];

}

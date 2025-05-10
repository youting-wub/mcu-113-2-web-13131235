import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, numberAttribute, HostBinding, input, booleanAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly id = input.required<number, string | number>({ transform: numberAttribute });

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly isShow = input.required<boolean, string | boolean>({ transform: booleanAttribute });

  readonly photoUrl = input<string>();

  readonly createDate = input<Date>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });
  readonly view = output<void>();
  readonly edit = output<void>();
  readonly remove = output<void>();

  @HostBinding('class')
  class = 'app-product-card';
}

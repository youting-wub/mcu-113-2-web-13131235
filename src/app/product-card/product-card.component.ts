import { CurrencyPipe, DatePipe } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;
  @Input()
  productName!: string;

  @Input()
  authors!: string[];

  @Input()
  company!: string;

  @Input({ transform: booleanAttribute })
  isShow!: boolean;

  @Output()
  isShowChange = new EventEmitter<boolean>();

  @Input()
  photoUrl!: string;

  @Input()
  createDate!: Date;

  @Input({ transform: numberAttribute })
  price!: number;

  @HostBinding('class')
  class = 'app-product-card';

  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}

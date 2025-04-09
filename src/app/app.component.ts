import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  productName = '書籍 A';
  author = '作者甲、作者乙、作者丙';
  company = '碩博文化';
  isShow = true;
  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}

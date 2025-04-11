import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  productName = '書籍 A';
  author = '作者甲、作者乙、作者丙';
  company = '碩博文化';
  isShow = true;
  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
  createDate = new Date('2025/4/9');
  price = 10000;
  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data: Product[] = [
    new Product({
      id: 1,
      name: '書籍 A',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 2,
      name: '書籍 B',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 3,
      name: '書籍 C',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 4,
      name: '書籍 D',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 5,
      name: '書籍 E',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 6,
      name: '書籍 F',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 7,
      name: '書籍 G',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 8,
      name: '書籍 H',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 9,
      name: '書籍 I',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
    new Product({
      id: 10,
      name: '書籍 J',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '碩博文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    }),
  ];
  getList(name: string | undefined, index: number, size: number): { data: Product[]; count: number } {
    const startIndex = (index - 1) * size;
    const endIndex = startIndex + size;
    const data = name ? this._data.filter((item) => item, name === name) : [...this._data];
    return { data: data.slice(startIndex, endIndex), count: this._data.length };
  }

  add(product: Readonly<Product>): void {
    const id = this._data.length === 0 ? 1 : Math.max(...this._data.map(({ id }) => id));
    this._data.push(new Product({ ...product, id }));
  }
}

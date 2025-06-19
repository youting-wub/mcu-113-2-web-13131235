export class Product {
  constructor(initData?: Partial<Product>) {
    if (!initData) return;
    Object.assign(this, initData);
  }
  id!: string;

  name!: string;

  company!: string;

  price!: number;

  authors!: string[];

  isShow!: boolean;

  photoUrl!: string;

  createDate!: Date;
}

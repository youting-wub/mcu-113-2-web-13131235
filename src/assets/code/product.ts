export class Product {
  constructor(id: number, name: string, company: string, price: number, isShow: boolean, createDate: Date, modifyDate?: Date) {}
  setDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}

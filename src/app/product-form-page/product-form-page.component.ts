import { Product } from './../../assets/code/product';
import { ActivatedRoute, Data } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.scss',
})
export class ProductFormPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null),
    company: new FormControl<string | null>(null),
    price: new FormControl<number | null>(null),
  });

  product!: Product;

  ngOnInit(): void {
    this.route.data
      .pipe(
        map(({ product }: Data) => product),
        tap((data) => console.log(data))
      )
      .subscribe((product) => (this.product = product));
  }
}

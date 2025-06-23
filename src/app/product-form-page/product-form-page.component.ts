import { Product } from './../../assets/code/product';
import { ActivatedRoute, Data } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    authors: new FormArray<FormControl<string | null>>([]),
    company: new FormControl<string | null>(null, { validators: [Validators.required] }),
    price: new FormControl<number | null>(null, { validators: [Validators.required] }),
  });

  product!: Product;

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get authors(): FormArray<FormControl<string | null>> {
    return this.form.get('authors') as FormArray<FormControl<string | null>>;
  }

  get company(): FormControl<string | null> {
    return this.form.get('company') as FormControl<string | null>;
  }

  get rice(): FormControl<string | null> {
    return this.form.get('price') as FormControl<string | null>;
  }

  ngOnInit(): void {
    this.route.data
      .pipe(
        map(({ product }: Data) => product),
        tap((data) => console.log(data))
      )
      .subscribe((product) => (this.product = product));
  }
  onAddAuthor(): void {
    const formControl = new FormControl<string | null>(null);
    this.authors.push(formControl);
  }
}

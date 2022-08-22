// @ts-ignore
// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  listProduct: Product[];
  idDelete: number;
  nameDelete: string;

  constructor(private productService: ProductService) {
    this.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProduct().subscribe(product => {
      this.listProduct = product;
    });
  }

  getDataDelete(product: Product) {
    this.idDelete = product.id;
    this.nameDelete = product.name;
    this.productService.deleteProduct(this.idDelete);
    this.ngOnInit();
  }

  delete(idDelete: number) {
    this.productService.deleteProduct(this.idDelete).subscribe(() => {
      this.ngOnInit();
    });
  }

}

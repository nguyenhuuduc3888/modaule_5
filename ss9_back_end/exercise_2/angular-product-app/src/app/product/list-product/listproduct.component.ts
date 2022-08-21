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

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProduct = this.productService.getAllProduct();
  }

  delete(product: Product) {
    this.idDelete = product.id;
    this.productService.deleteProduct(this.idDelete);
    this.ngOnInit();
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  listProduct: Product[];
  idDelete: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProduct = this.productService.getAll();
  }

  delete(product: Product) {
    this.idDelete = product.id;
    this.productService.delete(this.idDelete);
    this.ngOnInit();
  }
}

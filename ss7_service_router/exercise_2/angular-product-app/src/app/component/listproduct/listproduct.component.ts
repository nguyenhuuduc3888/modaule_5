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
  name: string;
  img: string;
  id: number;
  price: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProduct = this.productService.getAll();
  }

  openDelete(product: Product) {
    this.name = product.name;
    this.img = product.img;
    this.price = product.price;
    this.id = product.id;
  }

  delete(id: number) {
    this.productService.delete(id);
    this.ngOnInit();
  }
}

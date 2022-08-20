import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    img: new FormControl('https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg')
  });

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.save(product);
    this.productForm.reset();
    this.router.navigate(['listproduct']);
  }
}

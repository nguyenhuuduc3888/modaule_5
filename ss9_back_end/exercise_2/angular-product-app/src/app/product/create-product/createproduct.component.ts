import {Component, OnInit, Type} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  listCategory: Category[] = [];
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    img: new FormControl('https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg'),
    category: new FormControl(),
  });

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      this.router.navigate(['/product/list']);
    });
  }
}

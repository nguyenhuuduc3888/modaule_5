import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  listCategory: Category[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    });
  }

  private getProduct(id: number) {
    return this.productService.findByIdProduct(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        img: new FormControl('https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg'),
        category: new FormControl(product.category)
      });
    });
  }

  compareFn(value, option): boolean {
    return value.id === option.id;
  }

  update(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(value => {
      this.router.navigate(['product/list']);
    });
  }
}


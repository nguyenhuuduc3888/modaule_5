import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const category = this.getCategory(this.id);
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name),
      });
    });
  }

  ngOnInit(): void {
  }

  getCategory(id: number) {
    return this.categoryService.finByIdCategory(id);
  }

  update(id: number) {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category);
    this.router.navigate(['/category/list']);
  }
}

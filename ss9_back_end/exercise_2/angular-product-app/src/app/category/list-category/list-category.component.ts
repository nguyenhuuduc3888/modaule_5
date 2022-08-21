import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  listCategory: Category[];
  idDelete: number;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.listCategory = this.categoryService.getAllCategory();
  }

  delete(c: Category) {
    this.idDelete = c.id;
    this.categoryService.deleteCategory(this.idDelete);
    this.ngOnInit();
  }
}

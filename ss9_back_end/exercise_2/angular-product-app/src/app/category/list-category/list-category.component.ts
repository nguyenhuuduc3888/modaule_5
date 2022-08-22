import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  listCategory: Category[] = [];
  nameDelete: string;
  idDelete: number;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
      console.log(listCategory);
    });
  }

  getDataDelete(category: Category) {
    this.nameDelete = category.name;
    this.idDelete = category.id;
  }

  delete(idDelete: number) {
    this.categoryService.deleteCategory(this.idDelete).subscribe(() => {
      this.ngOnInit();
    });
  }
}

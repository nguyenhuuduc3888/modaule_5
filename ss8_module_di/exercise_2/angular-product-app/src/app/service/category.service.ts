import {Injectable} from '@angular/core';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  listCategory: Category[] = [
    {id: 1, name: 'Điện Thoại'},
    {id: 2, name: 'Lap Top'},
    {id: 3, name: 'Phụ Kiện'}
  ];

  constructor() {
  }

  getAllCategory() {
    return this.listCategory;
  }

  saveCategory(category) {
    this.listCategory.push(category);
  }

  finByIdCategory(id: number) {
    return this.listCategory.find(c => c.id === id);
  }

  updateCategory(id: number, category: Category) {
    for (let i = 0; i < this.listCategory.length; i++) {
      if (this.listCategory[i].id === id) {
        this.listCategory[i] = category;
      }
    }
  }

  deleteCategory(id: number) {
    this.listCategory = this.listCategory.filter(c => {
      return c.id !== id;
    });
  }

}

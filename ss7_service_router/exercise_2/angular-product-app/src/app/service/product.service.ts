import {Injectable, PLATFORM_ID} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    {
      id: 1,
      name: 'Iphone 13 Promax 256Gb',
      price: 5000000,
      description: 'New 100%',
      img: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy Note 20',
      price: 6000000,
      description: 'New 100%',
      img: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg'
    },
    {
      id: 2,
      name: 'Xiaomi S20 Utral',
      price: 7000000,
      description: 'New 100%',
      img: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg'
    },
    {
      id: 4,
      name: 'Huawei P50 ',
      price: 8000000,
      description: 'New 100%',
      img: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.productList;
  }

  save(product) {
    this.productList.push(product);
  }

  findById(id: number) {
    return this.productList.find(product => product.id === id);
  }

  update(id: number, product: Product) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList[i] = product;
      }
    }
  }

  delete(id: number) {
    this.productList = this.productList.filter(product => {
      return product.id !== id;
    });
  }

}

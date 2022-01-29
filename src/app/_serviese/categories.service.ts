import { Injectable } from '@angular/core';
import { Category } from './Category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: Category[] = [
    {
      id: 1,
      name: ' Arts & Crafts',
    },
    {
      id: 2,
      name: 'Automotive',
    },
    {
      id: 3,
      name: 'Books',
    },
    {
      id: 4,
      name: ' Arts & Eletronics',
    },
    {
      id: 5,
      name: 'Womens Fashion',
    },
    {
      id: 6,
      name: 'Man s Fashion',
    },
    {
      id: 7,
      name: 'Health & Household',
    },
    {
      id: 8,
      name: ' Military Accessories',
    },
    {
      id: 9,
      name: ' Home & Kitchen',
    },
    {
      id: 10,
      name: 'Tools & Home Improvement',
    },
  ];

  constructor() {}
  getAllGategroys(): Category[] {
    return [...this.categories];
  }

  getCategroyById(id: number): Category | undefined {
    return this.categories.find((c) => c.id === id);
  }

  save() {}
  updata() {}
  delete() {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemCategory } from './item-category.model';

@Injectable()
export class ItemCategoryService {

  //private _baseUrl = environment.baseApiUrl;
  private _baseUrl = 'http://localhost:3000/itemCategories';

  constructor(private http: HttpClient) {}

  getItemCategories() {
    return this.http
      .get<any>(this._baseUrl)
      .toPromise()
      .then((res) => <ItemCategory[]>res)
      .then((data) => {
        return data;
      });
  }
}

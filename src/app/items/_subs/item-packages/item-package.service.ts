import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IItemPackage, ItemPackage } from './item-package.model';

@Injectable()
export class ItemPackageService {

  //private _baseUrl = environment.baseApiUrl;
  private _baseUrl = 'http://localhost:3000/itemPackages';

  constructor(private http: HttpClient) {}

  getPackage(barcode: any) {
    return this.http
      .get<any>(this._baseUrl + '?barcode=' + barcode)
      .toPromise()
      .then((res) => <ItemPackage>res)
      .then((data) => {
        return data;
      });
  }
}

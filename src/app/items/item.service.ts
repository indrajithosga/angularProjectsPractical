import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './item.model';
import { ItemPackage } from './_subs/item-packages';

@Injectable()
export class ItemService {
  //private _baseUrl = environment.baseApiUrl;
  private _baseUrl = 'http://localhost:3000/items';
  private _barcodeUrl = 'http://localhost:3000/itemPackages';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http
      .get<any>(this._baseUrl + '?_start=20&_limit=10')
      .toPromise()
      .then((res) => <Item[]>res)
      .then((data) => {
        return data;
      });
  }

  getItemByBarcode(barcode: string) {
    return this.http
      .get<any>(this._barcodeUrl + '?barcode=' + barcode)
      .toPromise()
      .then((res) => <ItemPackage[]>res)
      .then((data) => {
        //return data;
        return this.http
          .get<any>(this._baseUrl + '?id=' + data[0].itemId)
          .toPromise()
          .then((res) => <Item[]>res)
          .then((data) => {
            return data[0];
          });
      });
  }
}

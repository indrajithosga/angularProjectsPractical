import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Provider } from './provider.model';

@Injectable()
export class ProviderService {

  //private _baseUrl = environment.baseApiUrl;
  private _baseUrl = 'http://localhost:3000/appointment/providers';

  constructor(private http: HttpClient) {}

  getProviders() {
    return this.http
      .get<any>(this._baseUrl)
      .toPromise()
      .then((res) => <Provider[]>res)
      .then((data) => {
        return data;
      });
  }
}

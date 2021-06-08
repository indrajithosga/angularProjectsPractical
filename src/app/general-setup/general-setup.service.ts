import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GeneralSetup } from './general-setup.model';

@Injectable()
export class GeneralSetupService {

  //private _baseUrl = environment.baseApiUrl;
  private _baseUrl = 'http://localhost:3000/appointment/generalSetup';
  
  constructor(private http: HttpClient) {}

  getGeneralSetup() {
    return this.http
      .get<any>(this._baseUrl)
      .toPromise()
      .then((res) => <GeneralSetup[]>res)
      .then((data) => {
        return data;
      });
  }
}

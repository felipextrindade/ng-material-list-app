import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AppConfig from '../../config';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {}

  public getCategories() {
      return this.http.get(`${AppConfig.rootUrl}/Lists/listTypes`);
  }
}

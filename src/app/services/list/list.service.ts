import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AppConfig from '../../config';


@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}

  public postList(list) {
      return this.http.post(`${AppConfig.rootUrl}/Lists/saveList`, list);
  }

}

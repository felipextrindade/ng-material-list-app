import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AppConfig from '../../config';


@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}

  public postList(list) {
      return this.http.post(`${AppConfig.rootUrl}/Lists/saveList`, list);
  }

  public getAllListsByType(typeId) {
    return this.http.get(`${AppConfig.rootUrl}/Lists/byTypeId/${typeId}`);
  }

  public deleteList(listId) {
    return this.http.get(`${AppConfig.rootUrl}/Lists/removeListAndItems/${listId}`);
  }
}

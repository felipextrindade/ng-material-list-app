import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AppConfig from '../../config';


@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  public postItem(item) {
      return this.http.post(`${AppConfig.rootUrl}/Lists/saveListItem`, item);
  }

  public getAllItems(listId) {
    return this.http.get(`${AppConfig.rootUrl}/Lists/getListById/${listId}`);
  }

  public deleteItem(itemId) {
    return this.http.get(`${AppConfig.rootUrl}/Lists/removeItem/${itemId}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { CategoryService, ListService } from '../../services';
import { Category, List } from '../../model';
import {isEmpty} from 'lodash';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss'],
  providers: [CategoryService, ListService]
})
export class AllListsComponent implements OnInit {

  private categoryService: CategoryService;
  private listService: ListService;
  private categoryId: Number;
  private categories: Category[];
  private lists: List[];

  constructor(categoryService: CategoryService, listService: ListService) {
      this.categoryService = categoryService;
      this.listService = listService;
      this.lists = [];
  }

  ngOnInit() {
    this.categoryService.getCategories().forEach(data => {
      this.handleCategories(data);
    });
  }

  private handleCategories(data) {
    this.categories = data;
  }

  private searchCategory() {
    this.listService.getAllListsByType(this.categoryId).forEach( data => {
      this.handleLists(data);
    }).catch(err => {
      throw err;
    });
  }

  private handleLists(data) {
    if (!isEmpty(data)) {
      this.lists = data;
    } else {
      // For mock purposes
      this.lists = [
        {typeId: 1, name: 'Minha lista', id: 1, status: 1},
        {typeId: 2, name: 'Lista de presentes', id: 2, status: 1},
        {typeId: 3, name: 'A orçar', id: 3, status: 1},
        {typeId: 3, name: 'Lista de venda', id: 4, status: 1}
      ];
    }
  }
}

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
    console.log('Calling search!');
    this.listService.getAllListsByType(this.categoryId).forEach( data => {
      this.handleLists(data);
    }).catch(err => {
      throw err;
    });
  }

  private handleLists(data) {
    if (!isEmpty(data)) {
      this.lists = data;
      console.log('não é vazio');
    } else {
      console.log('é vazio');
      this.lists = [
        {typeId: 1, name: 'Minha lista'},
        {typeId: 2, name: 'Lista de presentes'},
        {typeId: 3, name: 'A orçar'},
        {typeId: 3, name: 'Lista de venda'}
      ];
    }
  }
}

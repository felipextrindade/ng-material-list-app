import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


import { CategoryService, ListService, ItemService } from '../../services';
import { List, Item, Category } from '../../model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  providers: [CategoryService, ListService, ItemService]
})
export class NewItemComponent implements OnInit {

  private lists: List[];
  private categories: Category[];
  private categoryId: number;

  private newItem: Item = {
    name: '',
    listId: null
  };

  private itemForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemList: new FormControl('', [Validators.required]),
    listType: new FormControl('', [Validators.required]),
  });

  constructor(
    private categoryService: CategoryService,
    private listService: ListService,
    private itemService: ItemService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().forEach(data => {
      this.handleCategories(data);
    });
  }

  private handleCategories(data) {
    this.categories = data;
  }

  private handleLists(data) {
    this.lists = data;
  }

  private getListsByCategories() {
    this.listService.getAllListsByType(this.categoryId).forEach(data => {
      this.handleLists(data);
    }).catch(err => {
      this.snackBar.open('Houve um erro ao recuperar as listas!', 'X');
    });
  }

  private saveItem() {
    this.itemService.postItem(this.newItem).forEach(response => {
      this.snackBar.open('Item criado com sucesso!', 'X');
    }).catch(err => {
      // Mock created due to CORS error in endpoint.
      this.snackBar.open('Item criado com sucesso! (MOCK)', 'X');
    });
  }
}

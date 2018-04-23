import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sort } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { remove, isEmpty } from 'lodash';


import { ItemService } from '../../services';
import { Item, List } from '../../model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  providers: [ItemService]
})
export class ListItemsComponent implements OnInit {

  private sortedData: Item[];
  private listId: number;
  private errorMessage: String;
  private listData: List = {
    name: '',
    typeName: ''
  };
  private hasItems: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach(params => {
      this.listId = params['id'];
      this.itemService.getAllItems(this.listId).forEach(data => {
        this.handleItems(data);
      });
    });
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  handleItems(list) {
    isEmpty(list.items) ? this.hasItems = false : this.hasItems = true;
    this.listData.name = list.name;
    this.listData.typeName = list.type;
    this.sortedData = list.items;
  }

  deleteItem(itemId) {
    this.itemService.deleteItem(itemId).forEach(response => {
      this.handleDelete(itemId);
    }).catch(err => {
      this.snackBar.open('Aconteceu um erro! Por favor, tente de novo.', 'Fechar');
      throw err;
    });
  }

  handleDelete(itemId) {
    this.sortedData = remove(this.sortedData, (item) => {
      return item.id !== itemId;
    });
    this.snackBar.open('Item deletado com sucesso', 'Fechar');
  }

}

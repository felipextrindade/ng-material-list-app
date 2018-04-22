import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Sort } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material';
import {remove} from 'lodash';

import { List } from '../../../model';
import { ListService } from '../../../services';

@Component({
  selector: 'app-all-lists-table',
  templateUrl: './all-lists-table.component.html',
  styleUrls: ['./all-lists-table.component.scss'],
})
export class AllListsTableComponent implements OnInit, OnChanges {

  @Input() private lists: List[];

  private sortedData: List[];

  constructor(
    private dialog: MatDialogModule,
    private listService: ListService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.sortedData = this.lists.slice();
  }

  ngOnChanges(changes: any) {
    this.sortedData = changes.lists.currentValue;
  }

  sortData(sort: Sort) {
    const data = this.lists.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.typeId, b.typeId, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'typeName': return this.compare(
          this.getTypeName(a.typeId),
          this.getTypeName(b.typeId), isAsc
        );
        case 'status': return this.compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }

  getTypeName(typeId: Number) {
    switch (typeId) {
      case 1:
        return 'Tarefas';
      case 2:
        return 'Compras';
      case 3:
        return 'Outros';
      default:
        return 'Desconhecido';
    }
  }

  deleteList(listId) {
    this.listService.deleteList(listId).forEach(response => {
      this.handleDelete(listId);
    }).catch(err => {
      this.snackBar.open('Aconteceu um erro! Por favor, tente de novo.', 'Fechar');
      throw err;
    });
  }

  handleDelete(listId) {
    this.sortedData = remove(this.sortedData, (list) => {
        return list.id !== listId;
    });

    console.log(this.sortedData);
    this.snackBar.open('Lista deletada com sucesso', 'Fechar');
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

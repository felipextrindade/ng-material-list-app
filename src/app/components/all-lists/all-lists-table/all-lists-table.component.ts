import { Component, OnInit, OnChanges} from '@angular/core';
import { Input } from '@angular/core';
import { List } from '../../../model';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-all-lists-table',
  templateUrl: './all-lists-table.component.html',
  styleUrls: ['./all-lists-table.component.scss'],
})
export class AllListsTableComponent implements OnInit, OnChanges {

  @Input() private lists: List[];

  private sortedData: List[];

  constructor() {

  }

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
        case 'typeId': return this.compare(a.typeId, b.typeId, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'typeName': return this.compare(
                  this.getTypeName(a.typeId),
                  this.getTypeName(b.typeId), isAsc
        );
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

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

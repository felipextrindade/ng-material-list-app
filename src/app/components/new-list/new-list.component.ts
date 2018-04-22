import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { CategoryService, ListService } from '../../services';
import { Category, List } from '../../model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
  providers: [CategoryService, ListService]
})
export class NewListComponent implements OnInit {

  private categories: Category[];
  private newList: List;

  constructor(
    private categoryService: CategoryService,
    private listService: ListService,
    private snackBar: MatSnackBar
  ) {
    this.newList = {
      typeId: 0,
      name: ''
    };
  }

  ngOnInit() {
    this.categoryService.getCategories().forEach(data => {
      this.handleCategories(data);
    });
  }

  private handleCategories(data) {
    this.categories = data;
  }

  private saveList() {
    this.listService.postList(this.newList).forEach( response => {
      console.log(response);
    }).catch(err => {
      // Mock created due to CORS error in endpoint.
      this.snackBar.open('Lista criada com sucesso!', 'X');
    });
  }
}

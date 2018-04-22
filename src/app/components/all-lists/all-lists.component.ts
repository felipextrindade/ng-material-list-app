import { Component, OnInit } from '@angular/core';
import { CategoryService, ListService } from '../../services';
import { Category, List } from '../../model';

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
    console.log(this.categoryId);
  }
}

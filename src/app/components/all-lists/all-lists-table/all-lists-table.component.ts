import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { List } from '../../../model';

@Component({
  selector: 'app-all-lists-table',
  templateUrl: './all-lists-table.component.html',
  styleUrls: ['./all-lists-table.component.scss']
})
export class AllListsTableComponent implements OnInit {

  @Input() lists: List;

  constructor() { }

  ngOnInit() {

  }

}

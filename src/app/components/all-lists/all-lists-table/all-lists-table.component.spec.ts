import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListsTableComponent } from './all-lists-table.component';

describe('AllListsTableComponent', () => {
  let component: AllListsTableComponent;
  let fixture: ComponentFixture<AllListsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllListsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

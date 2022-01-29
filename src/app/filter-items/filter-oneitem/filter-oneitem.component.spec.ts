import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOneitemComponent } from './filter-oneitem.component';

describe('FilterOneitemComponent', () => {
  let component: FilterOneitemComponent;
  let fixture: ComponentFixture<FilterOneitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterOneitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

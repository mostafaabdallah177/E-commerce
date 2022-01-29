import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdectComponent } from './add-prodect.component';

describe('AddProdectComponent', () => {
  let component: AddProdectComponent;
  let fixture: ComponentFixture<AddProdectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProdectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

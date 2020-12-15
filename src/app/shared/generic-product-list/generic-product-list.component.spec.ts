import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericProductListComponent } from './generic-product-list.component';

describe('GenericProductListComponent', () => {
  let component: GenericProductListComponent;
  let fixture: ComponentFixture<GenericProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

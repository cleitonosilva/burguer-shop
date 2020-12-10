import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsHomeComponent } from './promotions-home.component';

describe('PromotionsHomeComponent', () => {
  let component: PromotionsHomeComponent;
  let fixture: ComponentFixture<PromotionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

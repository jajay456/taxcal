import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAmount } from './sale-amount';

describe('SaleAmount', () => {
  let component: SaleAmount;
  let fixture: ComponentFixture<SaleAmount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleAmount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleAmount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

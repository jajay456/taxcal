import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAmount } from './tax-amount';

describe('TaxAmount', () => {
  let component: TaxAmount;
  let fixture: ComponentFixture<TaxAmount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxAmount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxAmount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

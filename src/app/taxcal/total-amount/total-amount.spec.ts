import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAmount } from './total-amount';

describe('TotalAmount', () => {
  let component: TotalAmount;
  let fixture: ComponentFixture<TotalAmount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalAmount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalAmount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

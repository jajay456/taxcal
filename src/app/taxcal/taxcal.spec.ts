import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taxcal } from './taxcal.component';

describe('Taxcal', () => {
  let component: Taxcal;
  let fixture: ComponentFixture<Taxcal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taxcal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taxcal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

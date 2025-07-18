import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxcalComponent } from './taxcal.component';

describe('Taxcal', () => {
let component: TaxcalComponent;
let fixture: ComponentFixture<TaxcalComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [TaxcalComponent]
  }).compileComponents();

  fixture = TestBed.createComponent(TaxcalComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});
});

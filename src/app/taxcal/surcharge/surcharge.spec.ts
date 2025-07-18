import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Surcharge } from './surcharge';

describe('Surcharge', () => {
  let component: Surcharge;
  let fixture: ComponentFixture<Surcharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Surcharge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Surcharge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

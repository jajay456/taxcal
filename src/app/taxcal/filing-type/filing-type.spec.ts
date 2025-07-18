import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingType } from './filing-type';

describe('FilingType', () => {
  let component: FilingType;
  let fixture: ComponentFixture<FilingType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilingType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilingType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilingType } from "./filing-type/filing-type";
import { Month } from "./month/month";
import { Year } from "./year/year";
import { SaleAmount } from "./sale-amount/sale-amount";
import { TaxAmount } from "./tax-amount/tax-amount";
import { Surcharge } from "./surcharge/surcharge";
import { Penalty } from './penalty/penalty';
import { TotalAmount } from './total-amount/total-amount';
import { TaxDataModel } from './taxData.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { JsonModalComponent } from './json-modal/json-modal';


@Component({
  selector: 'app-taxcal',
  standalone: true,
  templateUrl: './taxcal.html',
  styleUrls: ['./taxcal.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FilingType, Month, Year, SaleAmount, TaxAmount, Surcharge, Penalty, TotalAmount],
})
export class TaxcalComponent {

  constructor(private readonly modalService: BsModalService) { }

  currentStep = 0;
  currentMonth: number = 0;
  currentYear: number = 0;
  InvalidVat = false;
  valueBeforeVat: number = 0;
  changtaxAmount: number | null = null;
  surchargeValue: number = 0;
  penaltyValue: number = 0;
  totalPayableValue: number = 0;
  minVat: number = 0;
  maxVat: number = 0;

  Years = [2020, 2021, 2022, 2023, 2024, 2025]
  months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];
  taxForm = new FormGroup({
    filingType: new FormControl('', Validators.required),
    vatMonth: new FormControl('', Validators.required),
    vatYear: new FormControl<number | null>(null, Validators.required),
    filingSubType: new FormControl('On-Time', Validators.required),
    valueBeforeVat: new FormControl<number | null>(0, Validators.required),
    changtaxAmount: new FormControl<number | null>(0, Validators.required)
  });
  typeOptions = ['On-Time', 'Late'];

  ngOnInit(): void {
    const now = new Date();
    this.currentMonth = now.getMonth() + 1;
    this.currentYear = now.getFullYear();
    this.changtaxAmount = this.taxAmount;
  }

  isDisabled = (value?: string): boolean => {
    if (!value) return false;

    const selectedYear = this.taxForm.get('vatYear')?.value;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0'); // e.g. '07'

    if (selectedYear === currentYear) {
      return value > currentMonth;
    }

    return false;
  };

  get showAdditional(): boolean {
    return this.taxForm.value.filingType === 'Additional';
  }

  get taxAmount(): number {
    const val = this.taxForm.value.valueBeforeVat;
    return val ? +val * 0.07 : 0;
  }


  next() {
    if (this.taxForm.valid && !this.InvalidVat) {
      this.currentStep = 1;
    } else {
      alert('Please fill in all information.');
    }
  }

  previous() {
    this.currentStep = 0;
  }

  submit() {
    const data: TaxDataModel = {
      filingType: this.taxForm.value.filingType ?? '',
      month: this.taxForm.value.vatMonth ?? '',
      year: this.taxForm.value.vatYear ?? null,
      saleAmount: this.taxForm.value.valueBeforeVat ?? 0,
      taxAmount: this.changtaxAmount ?? 0,
      surcharge: this.surchargeValue,
      penalty: this.showAdditional ? this.penaltyValue : 0,
      totalPayable: this.showAdditional ? this.totalPayableValue : this.changtaxAmount ?? 0
    };

    this.modalService.show(JsonModalComponent, {
      initialState: {
        jsonData: data
      }
    });
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tax-amount',
  imports: [FormsModule,CommonModule],
  templateUrl: './tax-amount.html',
})
export class TaxAmount {
  @Input() value: number | null = null;

  @Output() valueChange = new EventEmitter<number>();
  @Output() vatInvalid = new EventEmitter<boolean>();
  @Output() minVatChange = new EventEmitter<number>();
  @Output() maxVatChange = new EventEmitter<number>();

  displayValue: string = '';
  invalid: boolean = false;

  ngOnInit() {
    this.displayValue = this.value != null ? this.formatCurrency(this.value) : '';
  }

  onChange(val: string) {
    const raw = val.replace(/,/g, '');
    const num = parseFloat(raw);
    const isNumber = !isNaN(num);
    const value = isNumber ? num : 0;

    this.invalid = value < this.minVat || value > this.maxVat;
    this.vatInvalid.emit(this.invalid);

    if (!this.invalid && isNumber) {
      this.value = value;
      this.valueChange.emit(value);
    }
    this.minVatChange.emit(this.minVat);
    this.maxVatChange.emit(this.maxVat);
    this.displayValue = this.formatCurrency(value);
  }

  formatCurrency(val: number): string {
    return val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  get minVat(): number {
    return +Math.max((this.value ?? 0 ) - 20, 0).toFixed(2);
  }

  get maxVat(): number {
    return +((this.value ?? 0 ) + 20).toFixed(2);
  }
}

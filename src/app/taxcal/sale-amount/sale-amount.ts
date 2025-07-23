import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sale-amount',
  imports: [ FormsModule,
     CommonModule
  ],
  templateUrl: './sale-amount.html',
})
export class SaleAmount {
  @Input() value: number | null = null;
  @Output() valueChange = new EventEmitter<number>();

  displayValue: string = '';

  ngOnInit() {
      this.displayValue = this.value != null ? this.formatCurrency(this.value) : '';
    }

    onFormattedInput(event: any) {
      const raw = event.target.value.replace(/,/g, '');
      const numeric = parseFloat(raw);

      const safeValue = isNaN(numeric) ? 0 : Math.max(0, numeric);
      this.value = safeValue;
      this.valueChange.emit(safeValue);

      this.displayValue = this.formatCurrency(this.value);
    }

    formatCurrency(val: number): string {
      return val.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits : 2
      });
    }

  }

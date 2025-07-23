import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surcharge',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './surcharge.html',
})
export class Surcharge implements OnChanges {
  @Input() changtaxAmount: number | null = null;
  @Input() filingSubType: string = '';
  @Input() showAdditional: boolean = false;

  @Output() surchargeChange = new EventEmitter<number>();

  get surcharge(): number {
    if (this.showAdditional && this.filingSubType === 'Late') {
       const tax = this.changtaxAmount ?? 0; 
    return tax * 0.1;
    }
    return 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.surchargeChange.emit(this.surcharge); 
  }
}

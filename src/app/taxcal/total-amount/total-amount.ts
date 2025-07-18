import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-amount.html',
  styleUrls: ['./total-amount.css'],
})
export class TotalAmount implements OnChanges {
  @Input() changtaxAmount: number | null = null;
  @Input() surchargeValue: number = 0;
  @Input() penaltyValue: number = 0;

  @Output() totalChange = new EventEmitter<number>();

  get totalPayable(): number {
    return (this.changtaxAmount ?? 0) + this.surchargeValue + this.penaltyValue;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalChange.emit(this.totalPayable);
  }
}

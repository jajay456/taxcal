import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './penalty.html',
  styleUrl: './penalty.css'
})
export class Penalty implements OnChanges {
  @Input() filingSubType: string = '';
  @Input() showAdditional: boolean = false;

  @Output() penaltyChange = new EventEmitter<number>();

  get penalty(): number {
    if (this.showAdditional && this.filingSubType === 'Late') {
      return 200;
    }
    return 200;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.penaltyChange.emit(this.penalty); 
  }
}
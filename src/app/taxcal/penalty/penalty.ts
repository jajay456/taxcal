import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './penalty.html',
})
export class Penalty implements OnChanges {
  @Input() filingSubType: string = '';
  @Input() showAdditional: boolean = false;

  @Output() penaltyChange = new EventEmitter<number>();

get penalty(): number {
  return 200;
}

  ngOnChanges(changes: SimpleChanges): void {
    this.penaltyChange.emit(this.penalty); 
  }
}
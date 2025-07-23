import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-year',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './year.html',
})
export class Year {
  @Input() Years: number[] = [];
  @Input() value?: number;
  @Output() valueChange = new EventEmitter<number>();
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-month',
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './month.html',
  styleUrl: './month.css'
})
export class Month {
  
  @Input() value: string = '';
  @Input() months: { value: string, label: string }[] = [];
  @Input() isDisabled: (value: string) => boolean = () => false;

  @Output() valueChange = new EventEmitter<string>();
}

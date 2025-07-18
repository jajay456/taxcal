import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filing-type',
  imports: [
    FormsModule
  ],
  templateUrl: './filing-type.html',
  styleUrl: './filing-type.css'
})
export class FilingType {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  
}

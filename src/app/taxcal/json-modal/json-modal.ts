import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-json-modal',
  imports: [CommonModule],
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Tax Data JSON</h5>
    </div>
    <div class="modal-body">
      <pre>{{ jsonData | json }}</pre>
    </div>
  `
})
export class JsonModalComponent {
  @Input() jsonData: any;
}

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TaxcalComponent } from './taxcal/taxcal.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule,TaxcalComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');
}

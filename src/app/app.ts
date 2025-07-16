import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaxcalComponent } from './taxcal/taxcal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaxcalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}

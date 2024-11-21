import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, DataBindingComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Hello World</h1>`,
  styleUrl: './app.component.css'
  // styles: `h1{color:red;}`
})
export class AppComponent {
  title = 'first-app';
}

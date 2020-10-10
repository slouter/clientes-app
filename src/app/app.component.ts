import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a angular';
  curso : string = 'Angular 7 + Spring 5';
  alumno : string = 'Bryan Mauriz Arizaga';
}

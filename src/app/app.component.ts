import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './MyComponent/to-do/to-do.component';

@Component({
  selector: 'app-root',
  imports: [ToDoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = ' Angular hello-world';
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('Frontend');
}

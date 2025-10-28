import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent {
  todos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: (data) => this.todos = data,
      error: (err) => console.error('Erreur lors du chargement des todos :', err)
    });
  }
}

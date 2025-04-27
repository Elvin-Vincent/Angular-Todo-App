import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../ToDo';
import { AddToDoComponent } from '../add-to-do/add-to-do.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, AddToDoComponent, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  todos: ToDo[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('todos');
      if (saved) {
        this.todos = JSON.parse(saved);
      }
    }
  }

  onClickDelete(index: number) {
    if (confirm('Are you sure you want to delete this ToDo?')) {
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }

  addTodo(todo: ToDo) {
    todo.sno = this.todos.length + 1;
    this.todos.push(todo);
    this.saveTodos();
  }

  onStatusChange(event?: any) {
    this.saveTodos();
  }

  private saveTodos(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}

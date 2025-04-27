import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent {
  title: string = '';
  desc: string = '';

  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();

  constructor() {}

  onSubmit() {
    if (!this.title.trim()) {
      alert('Title cannot be empty!');
      return;
    }

    const todo: ToDo = {
      sno: 0, // We'll set proper sno in parent
      title: this.title,
      desc: this.desc,
      completed: false,
      active: false,
    };
    this.todoAdd.emit(todo);
    this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.desc = '';
  }
}

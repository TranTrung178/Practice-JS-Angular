import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class TodoListComponent {
  newTodo: string = '';
  todos: { text: string; completed: boolean }[] = [];

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleCompletion(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}

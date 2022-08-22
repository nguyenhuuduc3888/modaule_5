import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from "./todo.service";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  content = new FormControl();

  toggleTodo(i: number): void {
    const todo = this.todos[i];
    const todoData = {
      ...todo,
      completed: !todo.completed
    };
    this.todoService.updateTodo(todoData).subscribe(next => {
      this.todos[i].completed = next.completed;
    });
  }

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(next => {
      this.todos = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  addTodo(): void {
    const todo: Partial<Todo> = {
      title: this.content.value,
      completed: false
    };
    this.todoService.createTodo(todo).subscribe(next => {
      this.todos.unshift(next);
      this.content.setValue('');
    });
  }

  deleteTodo(i: number): void {
    const todo = this.todos[i];
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    });
  }
}

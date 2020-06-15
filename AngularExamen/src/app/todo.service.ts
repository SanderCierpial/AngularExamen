import { Injectable } from '@angular/core';
import { Todolist } from './todo/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public TodoServicelist = [
    {"id":1,"name":"test","checked":false},
  ];
  public Donelist = [];
  getTodoList(){
    return this.TodoServicelist; 
  }

  getDoneList(){
    return this.Donelist; 
  }

  addToDoList(value){
    this.TodoServicelist.push(value);
  }

  addDoneList(value){
    this.Donelist.push(value);
  }

  constructor() { }
}

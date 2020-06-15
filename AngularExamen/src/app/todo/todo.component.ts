import { Component, OnInit } from '@angular/core';
import { Todolist } from './todo-list';
import { TodoService} from '../todo.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public Todolijst = [];
  public TodoItem: Todolist;

  mockup(){
    this.Todolijst.push(
      this.TodoItem = new Todolist("winkelen"),
      )
  }

  constructor(private _todoService:TodoService) { }

  ngOnInit(): void {
  }

}

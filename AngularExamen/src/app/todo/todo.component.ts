import { Component, OnInit } from '@angular/core';
import { Todolist } from './todo-list';
import { TodoService} from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public Todolijst = [];
  public Donelijst = [];
  public TodoModel : Todolist;
  public Index : number;


  constructor(private _todoService:TodoService) { }

  ngOnInit(): void {
    this.Todolijst = this._todoService.getTodoList();

  }

  valueChange(isChecked : boolean,item : Todolist,event: any){
    if (isChecked){
      item.checked = true;
      this._todoService.addDoneList(item);
      console.log('donelijst',this._todoService.Donelist);
      this.Index = this.Todolijst.findIndex(x => x.id == item.id);
      this._todoService.TodoServicelist.splice((this.Index),this.Index+1);
      this.Todolijst = this._todoService.getTodoList();
    }
    }
    addToDo(value){
      console.log(value);
      this.TodoModel = new Todolist(this.Todolijst.length+1,value.toString(),false);
      this._todoService.addToDoList(this.TodoModel);
      this.Todolijst = this._todoService.getTodoList();
      console.log('todolijst',this.Todolijst);
    }
 }


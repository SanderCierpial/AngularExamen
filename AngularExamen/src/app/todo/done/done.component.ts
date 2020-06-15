import { Component, OnInit, Input } from '@angular/core';
import { TodoService} from '../../todo.service';
import { Todolist } from '../todo-list';



@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

@Input('parentData') public parentData;

  public Donelijst =[];
  public Todolijst =[];
  public TodoModel : Todolist;
  public Index : number;


  constructor(private _todoService:TodoService) { }

  ngOnInit(): void {
    this.Donelijst = this._todoService.getDoneList();
    this.Todolijst = this._todoService.getTodoList();
    console.log('Donelijst',this.Donelijst);
  }

  valueChange(isChecked : boolean,item : Todolist,event: any){
    if (!isChecked){
      item.checked = false;
      this._todoService.addToDoList(item);
      console.log('donechangeitem',item);
      console.log('todolist',this._todoService.TodoServicelist);
      this.Index = this.Donelijst.findIndex(name => name == item.name);
      this._todoService.Donelist.splice((item.id),item.id+1);
      this.Donelijst = this._todoService.getDoneList();
    }
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodoList(){
    return [
      {"id":1,"name":"test"},
    ]
  }

  constructor() { }
}

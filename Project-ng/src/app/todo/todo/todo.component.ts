import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 @Output()  postCreated=new EventEmitter();
  input="";
  Onclick(){
    if(this.input!=""){

      const value={input:this.input};
    console.log(value);
    this.postCreated.emit(value);
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}

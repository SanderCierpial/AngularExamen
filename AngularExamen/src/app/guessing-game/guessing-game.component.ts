import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';


@Component({
  selector: 'app-guessing-game',
  templateUrl: './guessing-game.component.html',
  styleUrls: ['./guessing-game.component.css']
})
export class GuessingGameComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    console.log('lodash =',this.lodash);
  }

  public lodash = random(1,1000);
  public pogingen = 0;
  public gok = null;
  public tip = "";

  onClick(value: number){
    if (this.time == 0) {
      this.startTimer();
    }
    console.log('value =',value)
    this.gok = value;
    this.pogingen = this.pogingen +1;
    if (this.gok<this.lodash) {
      this.tip = "Te laag!"
    }
    if (this.gok>this.lodash) {
      this.tip = "Te hoog!"
    }
    if (this.gok==this.lodash) {
      this.tip = "Juist!"
      this.stopTimer();
    }
  }
  public time = 0;
  public interval;

  startTimer(){
    this.interval = setInterval(()=>{
      this.time++;
    },1000);
  }

  stopTimer(){
    console.log('Juist');
    clearInterval(this.interval);
  }
}

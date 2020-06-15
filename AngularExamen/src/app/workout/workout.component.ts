import { Component, OnInit } from '@angular/core';
import { Oefening } from './oefening';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  constructor() { }

  Naam = "Workout App";
  Oefeningen = [];
  Titel = "Test";
  RustTussenOefeningen = 30;
  oefening: Oefening;
  oefeningNr = 1;
  mijnOefening = this.Oefeningen[this.oefeningNr];
  element;

  ngOnInit(): void {
    this.mockup();
    console.log('test',this.Oefeningen);
  }

  mockup(){
    this.Oefeningen.push(
      this.oefening = new Oefening("Step Ups","Step Ups","Simply step onto and off of a box one foot at a time in a continuous motion. Pump your arms simultaneously to give yourself momentum.",30),
      this.oefening = new Oefening("Glute Bridge","Glute Bridge","Lie on your back with your knees bent, feet flat on the floor. Place your arms at your sides for stability.  Press your heels into the floor and engage your glutes and your raise your hips and torso towards the ceiling. Stop when your body forms a straight line from your shoulders to your knees. Slowly lower yourself to the floor again.  Perform 3 sets of 10 reps.",30),
      this.oefening = new Oefening("Wall Sits","Wall Sits","Press your back into a wall and walk your feet out about two feet. Slide your back down the wall, bending at the knees until your thighs are parallel or nearly parallel to the floor. Your knees should not extend past your ankles. Hold the position as long as you can while contracting your abs. Stand slowly when you finish, leaning against the wall.",30),
      this.oefening = new Oefening("Supermans","Supermans","Step 1"+ "\n" +"Starting Position: Lie prone (on your stomach) on a mat with your legs extended, ankles slightly plantarflexed (toes pointing away from your shins), arms extended overhead with palms facing each other. Relax your head to align it with your spine." + "\n" + "Step 2" + "\n" + " Upward Phase: Exhale, contract your abdominal and core muscles to stabilize your spine and slowly extend both hips (raise both legs) a few inches off the floor while simultaneously raising both arms a few inches off the floor. Keep both legs and arms extended and avoiding any rotation in each. Maintain your head and torso position, avoiding any arching in your back or raising of your head. Hold this position briefly."+ "\n" + "Step 3"+ "\n" + "Downward Phase: Gently inhale and lower your legs and arms back towards your starting position without any movement in your low back or hips.",30),
      this.oefening = new Oefening("test","test","test",30),
      this.oefening = new Oefening("test","test","test",30),
      this.oefening = new Oefening("test","test","test",30),
      this.oefening = new Oefening("test","test","test",30),
      this.oefening = new Oefening("test","test","test",30),
      this.oefening = new Oefening("test","test","test",30),
      )
  }

  onStart(){
    document.getElementById("oef"+this.oefeningNr.toString()).style.display = "inline";
    document.getElementById("time").style.display = "inline";
    this.startTimer();
  }

  public time;
  public interval;

  startTimer(){
    clearInterval(this.interval);
    document.getElementById("resting").style.display = "none";
    if (this.oefeningNr>1){
      document.getElementById("oef"+this.oefeningNr.toString()).style.display = "inline";
    }
    this.oefeningNr++;
    //this.time = this.Oefeningen[this.oefeningNr].tijdsduur;
    this.time = 2;
    this.interval = setInterval(()=>{
      this.time--;
      if (this.time ==0){
        if(this.oefeningNr==10){
          this.endOfExercise();
        }
        else {
        this.RestingTimer();
        }
      }
    },1000);
  }

  RestingTimer(){
    clearInterval(this.interval);
    console.log('restingTest');
    document.getElementById("oef"+(this.oefeningNr-1).toString()).style.display = "none";
    document.getElementById("resting").style.display = "inline";
    //this.time = this.RustTussenOefeningen;
    this.time = 2;
    this.interval = setInterval(()=>{
      this.time--;
      if (this.time ==0){
        this.startTimer();
      }
    },1000);
  }

  stopTimer(){
    console.log('stopTimerTest');
    clearInterval(this.interval);
  }

  endOfExercise(){
    clearInterval(this.interval);
    document.getElementById("oef"+(this.oefeningNr-1).toString()).style.display = "none";
    document.getElementById("end").style.display = "inline";
    document.getElementById("time").style.display = "none";

  }
}

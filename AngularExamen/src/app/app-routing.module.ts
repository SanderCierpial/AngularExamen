import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuessingGameComponent } from './guessing-game/guessing-game.component';
import { WorkoutComponent } from './workout/workout.component';
import { TodoComponent } from './todo/todo.component';
import { OpenDataComponent } from './open-data/open-data.component';
import { DoneComponent } from './todo/done/done.component';


const routes: Routes = [
  { path: 'guessing-game', component: GuessingGameComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'done', component: DoneComponent },
  { path: 'open-data', component: OpenDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

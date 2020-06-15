import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuessingGameComponent } from './guessing-game/guessing-game.component';
import { WorkoutComponent } from './workout/workout.component';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './todo/done/done.component';
import { OpenDataComponent } from './open-data/open-data.component';
import { TodoService } from './todo.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    GuessingGameComponent,
    WorkoutComponent,
    TodoComponent,
    DoneComponent,
    OpenDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [TodoService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

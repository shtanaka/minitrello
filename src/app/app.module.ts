import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { CardListComponent } from './card-list.component';
import { TaskListService } from './task-list.service';
import { TaskService } from './task.service';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, CardComponent, CardListComponent],
  providers: [TaskListService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'card',
  templateUrl: './html/card.component.html',
  //styleUrls: ['./css/card.component.css'],
})

export class CardComponent {
  @Input() task : Task;
}

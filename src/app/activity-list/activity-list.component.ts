import { Component, OnInit } from '@angular/core';
import { TaskHandlerService } from '../task-handler.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent {
  items: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  // Utilizzo il service "task-handler". 
  constructor (public taskHandler:TaskHandlerService) {}


    // let items = this.taskHandler.items
    // console.log(this.taskHandler.items)
  
}

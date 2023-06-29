import { Component } from '@angular/core';
import { TaskHandlerService } from '../task-handler.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {

  newItem:string = ''
  filterOption: string = 'all';

  constructor (public taskHandler:TaskHandlerService) {}
  
  onClick() {
    this.taskHandler.addItem(this.newItem)
    this.newItem = ''
  }
}

import { Component } from '@angular/core';
import { TaskHandlerService } from '../task-handler.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {
  
  newItem:string = ''

  constructor (public taskHandler:TaskHandlerService) {}

  checkEmptyField() {
    if (this.newItem.trim() !== '') {
      this.taskHandler.addItem(this.newItem)
    }
  }

}

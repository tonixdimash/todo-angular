import { Component, OnInit } from '@angular/core';
import { TaskHandlerService } from '../task-handler.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent {

  filterOption: string = 'all';

  constructor (public taskHandler:TaskHandlerService) {}

}

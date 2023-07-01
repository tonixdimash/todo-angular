import { Component } from '@angular/core';
import { TaskHandlerService } from '../task-handler.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  constructor (public taskHandler:TaskHandlerService) { }

  newName = ''
  newStatus = false



  // ngDoCheck(): void {
  //   if (this.taskHandler.indexSelectedItem !== -1 && !this.firstExec) {
  //     this.newName = this.taskHandler.getSelectedItem().name

  //     this.firstExec = true
  //   }
  // }

  saveItem() {
    this.taskHandler.replaceItem(this.newName, this.newStatus)
    this.taskHandler.setIndexItem(-1)
  }

  keepItem() {
    this.taskHandler.setIndexItem(-1)
  }

}
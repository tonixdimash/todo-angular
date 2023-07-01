import { Component, DoCheck } from '@angular/core';
import { TaskHandlerService } from '../task-handler.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements DoCheck {

  constructor (public taskHandler:TaskHandlerService) { }

  currentIndex = -1
  newName = ''
  newStatus = false


  
  ngDoCheck(): void {
    if (this.currentIndex !== this.taskHandler.indexSelectedItem) {
      this.currentIndex = this.taskHandler.indexSelectedItem
      if (this.currentIndex !== -1) {
      this.updateItem()
      }
    }
  }

  updateItem() {
    this.newName = this.taskHandler.getSelectedItem().name
    this.newStatus = this.taskHandler.getSelectedItem().completed
  }

  saveItem() {
    this.taskHandler.replaceItem(this.newName, this.newStatus)
    this.taskHandler.setIndexItem(-1)
  }

  keepItem() {
    this.taskHandler.setIndexItem(-1)
  }

}
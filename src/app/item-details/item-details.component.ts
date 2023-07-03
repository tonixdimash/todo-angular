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
  newQta = 0
  newPriority = 'low'
  newDate = ''
  newNotes = ''

  //  considerando che il form dettaglio attività non viene mostrato se l'indice è -1 (nessuna selezione), mediante il metodo di lifecycle hook ngDoCheck() si sincronizza il valore dell'indice selezionato ed i relativi dati dell'elemento, altrimenti il form di dettaglio potrebbe mostrare dati inesatti o mancanti
  ngDoCheck(): void {
    if (this.currentIndex !== this.taskHandler.indexSelectedItem) {
      this.currentIndex = this.taskHandler.indexSelectedItem
      if (this.currentIndex !== -1) {
        this.updateItem()
      }
    }
  }

  // vengono aggiornate le variabili "locali"
  updateItem() {
    this.newName = this.taskHandler.getSelectedItem().name
    this.newStatus = this.taskHandler.getSelectedItem().completed
    this.newQta = this.taskHandler.getSelectedItem().extra.qta
    this.newPriority = this.taskHandler.getSelectedItem().extra.priority
    this.newDate = this.taskHandler.getSelectedItem().extra.date
    this.newNotes = this.taskHandler.getSelectedItem().extra.notes
  }

  // le modifiche vengono mandate al service per essere salvate; si imposta l'indice a "-1" per chiudere il form dei dettagli
  saveItem() {
    this.taskHandler.updateItem(this.newName, this.newStatus, this.newQta, this.newDate, this.newPriority, this.newNotes)
    this.taskHandler.setIndexItem(-1)
  }

  // nessuna modifica da salvare; si imposta l'indice a "-1" per chiudere il form dei dettagli
  keepItem() {
    this.taskHandler.setIndexItem(-1)
  }

}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskHandlerService {

  // Considero dei dati salvati in precedenza (provenienti ad esempio da un database e formattati in JSON)
  items = [
    {
      id: 1688247673013,
      name: "Jogging",
      completed: false,
      extra: {
        qta: 0,
        priority: 'low',
        date: '',
        notes: 'with my friend, schedule a day'
      }
    },
    {
      id: 1688247687119,
      name: 'Bills to pay',
      completed: false,
      extra: {
        qta: 2,
        priority: 'high',
        date: '',
        notes: 'urgent!!!'
      }
    }
  ]

  indexSelectedItem = -1

  constructor() { }

  // Aggiunge un'attività ad items con valori nulli di dettaglio per default
  addItem(itemName: string) {
    this.items.push({
      id: new Date().getTime(), // genero un id univoco per ogni nuova attività
      name: itemName,
      completed: false,
      extra: {
        qta: 0,
        priority: 'low',
        date: '',
        notes: ''
      }
    })
  }

  // Rimozione di un'attività da items
  removeItem(itemId: number) {
    const index = this.items.findIndex(item => item.id === itemId);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Restituisce l'elenco filtrato (all/complete/pending) delle attività da visualizzare 
  getFilteredItems(filterOption: string) {
    if (filterOption === 'completed') {
      return this.items.filter(item => item.completed);
    } else if (filterOption === 'pending') {
      return this.items.filter(item => !item.completed);
    } else {
      return this.items;
    }
  }

  // Restituisce il numero totale delle attività presenti nella lista filtrata (all/complete/pending)
  getCounter(filterOption: string) {
    if (filterOption === 'completed') {
      return this.items.filter(item => item.completed).length;
    } else if (filterOption === 'pending') {
      return this.items.filter(item => !item.completed).length;
    } else {
      return this.items.length;
    }
  }

  // Restituisce i dati dell'attività corrente/selezionata
  getSelectedItem() {
    return this.items[this.indexSelectedItem]
  }

  // Imposta l'indice dell'attività corrente/selezionata
  setIndexItem(itemId: number) {
    this.indexSelectedItem = this.items.findIndex(item => item.id === itemId)
  }

  // Restituisce l'indice dell'attività corrente/selezionata
  getIndexItem() {
    return this.indexSelectedItem
  }

  // Aggiorna i dati dell'attività corrente/selezionata
  updateItem(newName: string, newStatus: boolean, newQta: number, newDate: string, newPriority: string, newNotes: string) {
    this.items[this.indexSelectedItem].name = newName;
    this.items[this.indexSelectedItem].completed = newStatus;
    this.items[this.indexSelectedItem].extra.qta = newQta;
    this.items[this.indexSelectedItem].extra.date = newDate;
    this.items[this.indexSelectedItem].extra.priority = newPriority;
    this.items[this.indexSelectedItem].extra.notes = newNotes;
  }

  // Aggiorna (soltanto) lo stato dell'attività (completed/pending)
  updateStatus(itemId:number, newStatus: boolean) {
    this.items[this.items.findIndex(item => item.id === itemId)].completed = newStatus;
  }

}

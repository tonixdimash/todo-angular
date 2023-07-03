import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskHandlerService {

  // Da qui prendo i dati salvati in precedenza provenienti ad esempio da un database; in questo caso carico dei dati di default
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
      name: 'Bills',
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


  addItem(itemName: string) {
    this.items.push({
      id: new Date().getTime(),
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

  getItems() {
    return this.items
  }


  removeItem(itemId: number) {
    const index = this.items.findIndex(item => item.id === itemId);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getFilteredItems(filterOption: string) {
    if (filterOption === 'completed') {
      return this.items.filter(item => item.completed);
    } else if (filterOption === 'pending') {
      return this.items.filter(item => !item.completed);
    } else {
      return this.items;
    }
  }

  getTotalCounter() {
    return this.items.length
  }

  getCounter(filterOption: string) {
    if (filterOption === 'completed') {
      return this.items.filter(item => item.completed).length;
    } else if (filterOption === 'pending') {
      return this.items.filter(item => !item.completed).length;
    } else {
      return this.items.length;
    }
  }

  getSelectedItem() {
    return this.items[this.indexSelectedItem]
  }

  setIndexItem(itemId: number) {
    this.indexSelectedItem = this.items.findIndex(item => item.id === itemId)
  }

  getIndexItem() {
    return this.indexSelectedItem
  }

  replaceItem(newName: string, newStatus: boolean, newQta: number, newDate: string, newPriority: string, newNotes: string) {
    this.items[this.indexSelectedItem].name = newName;
    this.items[this.indexSelectedItem].completed = newStatus;
    this.items[this.indexSelectedItem].extra.qta = newQta;
    this.items[this.indexSelectedItem].extra.date = newDate;
    this.items[this.indexSelectedItem].extra.priority = newPriority;
    this.items[this.indexSelectedItem].extra.notes = newNotes;
  }

  updateStatus(itemId:number, newStatus: boolean) {
    this.items[this.items.findIndex(item => item.id === itemId)].completed = newStatus;
  }

}

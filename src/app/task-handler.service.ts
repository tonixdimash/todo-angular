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
      extra: {}
    },
    {
      id: 1688247687119,
      name: 'Bills',
      completed: true,
      extra: {}
    }
  ]

  indexSelectedItem = -1

  constructor() { }


  addItem(itemName: string) {
    this.items.push({
      id: new Date().getTime(),
      name: itemName,
      completed: false,
      extra: {}
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

  replaceItem(newName: string, newStatus: boolean) {
    this.items[this.indexSelectedItem].name = newName;
    this.items[this.indexSelectedItem].completed = newStatus;
  }

}

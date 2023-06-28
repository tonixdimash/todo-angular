import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskHandlerService {

  // Da qui prendo i dati salvati in precedenza provenienti ad esempio da un database; in questo caso carico dei dati di default
  items: string[] = ['Jogging','Pay the bills'];

  constructor() { }

  addItem(name: string) {
    this.items.push(name)
    console.log(this.items)
  }

  getItems() {
    return this.items
  }

}

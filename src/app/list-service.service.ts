import { Injectable } from '@angular/core';
import { todos } from './todos.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private dataCenter = new BehaviorSubject([]);
  currentData = this.dataCenter.asObservable();

  constructor() { 
  }

    addToStore(todo) {
      let current = this.dataCenter.getValue();
      current.push(new todos(todo, false));
      this.dataCenter.next(current);
    }

    removeFromStore(todo) {
      let newItem: any[] = this.dataCenter.getValue();
      newItem.forEach((item, index) => {
        if(item.title == todo) {newItem.splice(index, 1);}
      });
      this.dataCenter.next(newItem);
    }

    getItem() {
      return this.dataCenter;
    }

    crossOffList(todo) {
      let item = this.dataCenter.getValue();
      if (item == todo.item) {
        todo.item = false;
      }
    }

    changeData() {
      this.dataCenter.next(['bobby', 'tim']);
    }
}

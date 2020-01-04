import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ListServiceService } from './list-service.service';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { todos } from './todos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items$: Observable<any[]>;
 
  

  

  constructor(private myservice: ListServiceService, private router: Router) {
    
  }

  ngOnInit() {
    this.items$ = this.myservice.currentData;
      // .subscribe(
      //   (data) => console.log(data),
      //   (data) => console.log(data),
      //   () => console.log('complete')
      //   );
  }
  //put in service 
  addTodo(todo: HTMLInputElement): boolean {
    this.myservice.addToStore(todo.value);
    // this.item = this.myservice.getItem(); // <-- is this because ngoninit might not work every time to get the data?
    todo.value = '';
    return false;
  }

  removeTodo(todo: HTMLInputElement): boolean {
    this.myservice.removeFromStore(todo.innerText);
    return false;
  }

  // changeData() {
  //   this.myservice.changeData();
  // }

  toggleIdField(id) {
    let element = document.getElementById(id) as HTMLElement;
    element.classList.contains('item') ? 
    element.classList.remove('item') : 
    element.classList.add('item')
}
  
}

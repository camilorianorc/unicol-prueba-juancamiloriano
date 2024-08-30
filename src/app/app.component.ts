import { Component } from '@angular/core';
import * as bd from '../bd.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'unicol-prueba-juancamiloriano';
  data: any = bd;

  menu: any;

  ngOnInit() {
    console.log('Data', this.data);
this.menu = this.data.menu
console.log('this.menu', this.menu);


  }
}

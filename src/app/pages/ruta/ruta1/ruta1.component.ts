import { Component, OnInit } from '@angular/core';
import * as bd from '../../../../bd.json';


@Component({
  selector: 'app-ruta1',
  templateUrl: './ruta1.component.html',
  styleUrls: ['./ruta1.component.sass']
})
export class Ruta1Component implements OnInit {

  constructor() { }

  title = 'ruta-1';
  data: any = bd;
  content: any;

  ngOnInit() {
    console.log('Data', this.data);
    this.content = this.data.ruta1;
    console.log('this.menu', this.content);
  }
}

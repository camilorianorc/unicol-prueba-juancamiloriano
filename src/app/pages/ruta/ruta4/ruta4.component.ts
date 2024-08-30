import { Component, OnInit } from '@angular/core';
import * as bd from '../../../../bd.json';

@Component({
  selector: 'app-ruta4',
  templateUrl: './ruta4.component.html',
  styleUrls: ['./ruta4.component.sass']
})
export class Ruta4Component implements OnInit {

  constructor() { }

  title = 'ruta-1';
  data: any = bd;
  content: any;

  ngOnInit() {
    console.log('Data', this.data);
    this.content = this.data.ruta4;
    console.log('this.menu', this.content);
  }

}

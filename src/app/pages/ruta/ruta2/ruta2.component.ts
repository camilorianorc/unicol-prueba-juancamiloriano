import { Component, OnInit } from '@angular/core';
import * as bd from '../../../../bd.json';

@Component({
  selector: 'app-ruta2',
  templateUrl: './ruta2.component.html',
  styleUrls: ['./ruta2.component.sass']
})
export class Ruta2Component implements OnInit {

  constructor() { }

  title = 'ruta-1';
  data: any = bd;
  content: any;

  ngOnInit() {
    console.log('Data', this.data);
    this.content = this.data.ruta2;
    console.log('this.menu', this.content);
  }
}

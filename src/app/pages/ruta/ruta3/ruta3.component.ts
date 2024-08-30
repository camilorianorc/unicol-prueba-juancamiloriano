import { Component, OnInit } from '@angular/core';
import * as bd from '../../../../bd.json';

@Component({
  selector: 'app-ruta3',
  templateUrl: './ruta3.component.html',
  styleUrls: ['./ruta3.component.sass']
})
export class Ruta3Component implements OnInit {

  constructor() { }

  title = 'ruta-1';
  data: any = bd;
  content: any;

  ngOnInit() {
    console.log('Data', this.data);
    this.content = this.data.ruta3;
    console.log('this.menu', this.content);
  }

}

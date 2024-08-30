import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RutaComponent } from './pages/ruta/ruta.component';
import { Ruta4Component } from './pages/ruta/ruta4/ruta4.component';
import { Ruta3Component } from './pages/ruta/ruta3/ruta3.component';
import { Ruta2Component } from './pages/ruta/ruta2/ruta2.component';
import { Ruta1Component } from './pages/ruta/ruta1/ruta1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RutaComponent,
    Ruta4Component,
    Ruta3Component,
    Ruta2Component,
    Ruta1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

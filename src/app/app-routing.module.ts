import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RutaComponent } from './pages/ruta/ruta.component';
import { Ruta1Component } from './pages/ruta/ruta1/ruta1.component';
import { Ruta2Component } from './pages/ruta/ruta2/ruta2.component';
import { Ruta3Component } from './pages/ruta/ruta3/ruta3.component';
import { Ruta4Component } from './pages/ruta/ruta4/ruta4.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rutas',
    component: RutaComponent
  },
  {
    path: 'rutas/ruta-1',
    component: Ruta1Component
  },
  {
    path: 'rutas/ruta-2',
    component: Ruta2Component
  },
  {
    path: 'rutas/ruta-3',
    component: Ruta3Component
  },
  {
    path: 'rutas/ruta-4',
    component: Ruta4Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SobremiComponent } from './portafolio/sobremi/sobremi.component';
import { ProyectosComponent } from './portafolio/proyectos/proyectos.component';
import { ContactosComponent } from './portafolio/contactos/contactos.component';
import { HomeComponent } from './portafolio/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: PortafolioComponent

  },
  {
    path: 'sobre-mi',
    component: SobremiComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'contacto',
    component: ContactosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelaRegistroComponent } from './Produccion/panela-registro/panela-registro.component';
import { PanelaConsultaComponent } from './Produccion/panela-consulta/panela-consulta.component';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import {ConocenosComponent} from './conocenos/conocenos.component';
import{ProductorRegistroComponent} from './Productor/productor-registro/productor-registro.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PredioRegistroComponent } from './predio/predio-registro/predio-registro.component';
import { PredioConsultaComponent } from './predio/predio-consulta/predio-consulta.component';
import { ProductorConsultaComponent } from './Productor/productor-consulta/productor-consulta.component';


const routes: Routes = [
  {
    path: 'productorRegistro',
    component: ProductorRegistroComponent,canActivate: [AuthGuardService]
    },
    {
      path: 'productorConsulta',
      component: ProductorConsultaComponent,canActivate: [AuthGuardService]
      },
  {
  path: 'panelaRegistro',
  component: PanelaRegistroComponent,canActivate: [AuthGuardService]
  },

  {
    path: 'panelaConsulta',
    component: PanelaConsultaComponent,canActivate: [AuthGuardService]
  },
  {
    path: 'loggin',
    component: LogginComponent
  },
  {
    path: 'conocenos',
    component: ConocenosComponent
  },
  {
    path: 'predioRegistro',
    component:PredioRegistroComponent,canActivate: [AuthGuardService]
  },
  {
    path: 'predioConsulta',
    component:PredioConsultaComponent,canActivate: [AuthGuardService]
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }


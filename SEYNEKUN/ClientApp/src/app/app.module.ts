import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelaService } from './services/panela.service';
import { FiltroProductoPipe } from './pipe/filtro-producto.pipe';
import { LogginComponent } from './loggin/loggin.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ProductorConsultaComponent } from './Productor/productor-consulta/productor-consulta.component';
import { ProductorRegistroComponent } from './Productor/productor-registro/productor-registro.component';
import { ProductorService } from './services/productor.service';
import { JwtInterceptorService } from "./services/jwt-interceptor.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { PanelaRegistroComponent } from './Produccion/panela-registro/panela-registro.component';
import { PanelaConsultaComponent } from './Produccion/panela-consulta/panela-consulta.component';
import { PredioConsultaComponent } from './predio/predio-consulta/predio-consulta.component';
import { PredioRegistroComponent } from './predio/predio-registro/predio-registro.component';

@NgModule({
  declarations: [
    
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PanelaConsultaComponent,
    PanelaRegistroComponent,
    FiltroProductoPipe,
    LogginComponent,
    AlertModalComponent,
    ConocenosComponent,
    ProductorConsultaComponent,
    ProductorRegistroComponent,
    PredioConsultaComponent,
    PredioRegistroComponent,
  ],
  imports: [
    
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [PanelaService,ProductorService,[{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },],],
  bootstrap: [AppComponent]
})
export class AppModule { }

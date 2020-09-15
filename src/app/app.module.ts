import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './components/register/register.component';
import { ListadopaisesComponent } from './components/listadopaises/listadopaises.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {PaisesService} from '../app/services/paises.service';
import { DetallepaisComponent } from './components/detallepais/detallepais.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';
import { BotonEntidadComponent } from './components/boton-entidad/boton-entidad.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    ListadopaisesComponent,
    DetallepaisComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    DetalleEntidadComponent,
    BotonEntidadComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

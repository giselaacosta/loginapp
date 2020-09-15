import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { BienvenidoComponent } from "./components/bienvenido/bienvenido.component";
import { ErrorComponent } from "./components/error/error.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { ListadopaisesComponent } from "./components/listadopaises/listadopaises.component";
import { DetallepaisComponent } from "./components/detallepais/detallepais.component";
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';
import { BotonEntidadComponent } from './components/boton-entidad/boton-entidad.component';
const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "bienvenido", component: BienvenidoComponent, pathMatch: "full" },
  { path: "error", component: ErrorComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "listadopaises", component: ListadopaisesComponent, pathMatch: "full" },
  { path: "detallepais", component: DetallepaisComponent, pathMatch: "full" },
  { path: "entidad/listado", component: ControlEntidadComponent, pathMatch: "full" },
  { path: "listado-entidad", component: ListadoEntidadComponent, pathMatch: "full" },
  { path: "detalle-entidad", component: DetalleEntidadComponent, pathMatch: "full" },
  { path: "boton-entidad", component: BotonEntidadComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
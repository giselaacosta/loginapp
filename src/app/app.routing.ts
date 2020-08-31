import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { BienvenidoComponent } from "./components/bienvenido/bienvenido.component";
import { ErrorComponent } from "./components/error/error.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";

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
  { path: "home", component: HomeComponent, pathMatch: "full" }

];
export const routing = RouterModule.forRoot(appRoutes);
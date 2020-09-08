import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent  {

  constructor(private router: Router) { }

  async mostrarPaises()
  {

    this.router.navigate(['/listadopaises'])   

  }

}

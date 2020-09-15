import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../services/paises.service';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent {
  listadoPersonas=[];
  personaseleccionada;
  constructor(private miServicio:PaisesService) { }

  ngOnInit() {
    this.miServicio.obtenerPersonas().subscribe((personas:any) => {
    console.log(personas);
      this.listadoPersonas = personas;
    }, error => {
      console.log('Error');
    });
  }
  personaSeleccionada(persona){

    this.personaseleccionada=persona;
   console.log(this.personaseleccionada);

  }
}

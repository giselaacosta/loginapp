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
  listadoBorrados=[];
  personaslist:any;
  personaseleccionada;
  mostrandoIf: boolean;
 

  constructor(private miServicio:PaisesService) { }
  ngOnInit() {
    this.listadoPersonas=this.obtenerPersonasLista();
    this.listadoBorrados=this.obtenerPersonasBorradas();
    this.mostrandoIf = false;


  }
  obtenerPersonasBorradas():any[]{
    var borr:any=localStorage.getItem('listaborrados');
    //console.log(" estoy en borrados:",borr);
    this.listadoBorrados =JSON.parse(borr);
    //window.location.reload();
    return  this.listadoBorrados;
  }

  obtenerPersonasLista():any[]{
    var per:any=localStorage.getItem('listapersonas');
    if(per != null){

    
      this.listadoPersonas = JSON.parse(per);
    }
  else{

  
    this.miServicio.obtenerPersonas().subscribe((personas:any) => {
        this.listadoPersonas = personas;
        localStorage.setItem('listapersonas', JSON.stringify(this.listadoPersonas));   
    
    }, error => {
      console.log('Error');
    });
  }
   return  this.listadoPersonas;
  }
  personaSeleccionada(persona){
    this.mostrandoIf = true;

    this.personaseleccionada=persona;
   // window.location.reload();

  }

  // mostrarElementoNgIf() {
  //   if (this.mostrandoIf) {
  //     this.mostrandoIf = false;
  //     console.log(this.mostrandoIf);
  //   } else {
  //     console.log(this.mostrandoIf);
  //     this.mostrandoIf = true;

  //   }
  // }
}

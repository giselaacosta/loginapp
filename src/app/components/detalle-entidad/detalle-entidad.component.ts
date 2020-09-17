import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {
  personaseleccionada;
  @Input() persona;
  //:{name:'',flag:''};
  @Output() emitirborrarpersona:EventEmitter<any>=new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.persona);
   this.persona= {Apellido:'',Nombre:''};

  }
  borrarPersona(persona){
    this.emitirborrarpersona.emit(persona);
    console.log(persona);
      }
      personaSeleccionada(persona){

        this.personaseleccionada=persona;
    
      }
}

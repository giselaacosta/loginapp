import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent  {

  @Input() listadoPersonas=[];


  @Output() emitirverpersonas:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(){
  }
  verPersona(persona){
    this.emitirverpersonas.emit(persona);
 
      }
}

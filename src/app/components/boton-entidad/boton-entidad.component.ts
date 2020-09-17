import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Persona} from '../../clases/persona';
@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {
  @Input() persona;
  @Output() emitirborrarpersona:EventEmitter<any>=new EventEmitter();
  item:any=[];
  constructor() {
   }

  ngOnInit(): void {
  }

    borrarPersona(persona){
      var guardado:any = localStorage.getItem('listapersonas');
      localStorage.removeItem('listapersonas');

      var id=persona.id;
      //console.log(guardado);
    
      for(let result of JSON.parse(guardado)){
     if(result.id==id)
     {
      console.log(result.id);
     }
     else 
     {
       this.item.push(result);
     }
  
      }

      this.emitirborrarpersona.emit(persona);
      localStorage.setItem('listapersonas', JSON.stringify(this.item));   

     //console.log(persona);
       }
}

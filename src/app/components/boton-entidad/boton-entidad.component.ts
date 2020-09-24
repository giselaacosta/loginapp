import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Persona} from '../../clases/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {
  @Input() persona;
  @Output() emitirborrarpersona:EventEmitter<any>=new EventEmitter();
  item:any=[];
 borrados:any=[];
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

    borrarPersona(persona){
      var guardado:any = localStorage.getItem('listapersonas');
   
      var borrados2=localStorage.getItem('listaborrados');
   

      localStorage.removeItem('listapersonas');
      localStorage.removeItem('listaborrados');

      var id=persona.id;
    
    
      for(let result of JSON.parse(guardado)){
     if(result.id==id)
     {
     

     this.borrados.push(result);    
      JSON.stringify(this.borrados);
     }
     else
   {
     this.item.push(result);
   }
      }
      if(borrados2 != null)
      {
      for(let result of JSON.parse(borrados2)){
      
          this.borrados.push(result);   
    
        }
      }
      this.emitirborrarpersona.emit(persona);
      localStorage.setItem('listapersonas', JSON.stringify(this.item));   
      localStorage.setItem('listaborrados', JSON.stringify(this.borrados));   
   
 
     window.location.reload();
       }
    
}

import { Component, OnInit,Input} from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() persona;
  //:{name:'',flag:''};
  constructor() {
  }

  ngOnInit() {
    console.log(this.persona);
   this.persona= {Apellido:'',Nombre:''};

  }

}

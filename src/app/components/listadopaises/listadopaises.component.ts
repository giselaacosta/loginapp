import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-listadopaises',
  templateUrl: './listadopaises.component.html',
  styleUrls: ['./listadopaises.component.css']
})
export class ListadopaisesComponent {

@Input() listadoPaises=[];
//@Input() 
@Output() emitirverpais:EventEmitter<any>=new EventEmitter();
  constructor() { }



  ngOnInit(){
   // console.log(this.mivariable);
 

  }
  verPais(pais){
this.emitirverpais.emit(pais);
  }

}

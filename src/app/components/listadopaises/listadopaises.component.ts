import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../services/paises.service';
@Component({
  selector: 'app-listadopaises',
  templateUrl: './listadopaises.component.html',
  styleUrls: ['./listadopaises.component.css']
})
export class ListadopaisesComponent implements OnInit {


  listadoPaises=[];

  constructor(private miServicio:PaisesService) { }



  ngOnInit(){
    this.miServicio.obtenerPaises().subscribe((paises:any)=>{

      console.log(paises);
      this.listadoPaises=paises;
    });

  }

}

import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../services/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulopaises="titulo paises";
  listadoPaises=[];
  paisseleccionado;
  constructor(private miServicio:PaisesService) { }

  ngOnInit() {
    this.miServicio.obtenerPaises().subscribe((paises: any) => {
      console.log(paises);
      console.log('console log dentro del observable');
      this.listadoPaises = paises;
    }, error => {
      console.log('Error');
    });
    console.log('console log despues del observable');
  }
  paisSeleccionado(pais){

    console.log(pais);
    this.paisseleccionado=pais;
  }

}


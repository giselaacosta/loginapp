import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detallepais',
  templateUrl: './detallepais.component.html',
  styleUrls: ['./detallepais.component.css']
})
export class DetallepaisComponent implements OnInit {
  @Input() pais:{name:'',flag:''};
  constructor() { 
  }

  ngOnInit(): void {
  }

}

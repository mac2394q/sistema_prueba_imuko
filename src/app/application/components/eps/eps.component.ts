import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eps',
  templateUrl: './eps.component.html',
  styleUrls: ['./eps.component.css']
})
export class EpsComponent implements OnInit {

  title:string = "Listado de EPS activas en el sistemas."
  descripcion:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 15;
  peso = 60;  
  altura = 160;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarAltura(e){
    console.log(e.target.value);
    this.altura = e.target.value; 
  }
}

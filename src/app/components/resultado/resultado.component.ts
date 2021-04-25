import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  encabezado: string;
  textoResultado: string;
  constructor(private route:ActivatedRoute ) {
    this.encabezado = '';
    this.textoResultado ='';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
    this.getResultado();
  }
  getResultado(){
    if(this.bmi >=25 ){
      this.encabezado = 'Exceso de Peso'
      this.textoResultado = 'Tienes un peso coorporal superiror al normal.'
    }else if(this.bmi >=18.5 ){
      this.encabezado = 'Normal'
      this.textoResultado = 'Tu peso coorporal es normal.'
    }else{
      this.encabezado = 'Bajo'
      this.textoResultado = 'Tu peso coorporal es más bajo de lo normal.'

    }
  }

}

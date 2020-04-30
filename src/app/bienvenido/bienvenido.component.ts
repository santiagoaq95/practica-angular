import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent  {

  constructor() { }


  nombreApp = 'Control de Notas';
  bienvenidoMensaje = 'Bienvenido al Control de Notas para la Clase de Certificación HTML 5';
  fecha: Date = new Date();
  mensajeFecha = 'La fecha del sistema es: ';

}

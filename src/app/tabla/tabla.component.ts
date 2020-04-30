import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']

})
export class TablaComponent  {

  nombreColumnas: string[] = ['Código', 'Nombre', 'Apellido', 'Nota', 'Observación'];
  aprobo = 'Aprobó';
  reprobo = 'Reprobó';
  listaEstudiantes: Estudiante[] = [
    {codigo: 1, nombre: 'Santiago', apellido: 'Alzate', nota: 5},
    {codigo: 2, nombre: 'Sebastian', apellido: 'Lopez', nota: 2},
    {codigo: 3, nombre: 'Juan', apellido: 'Castro', nota: 4.2},
    {codigo: 4, nombre: 'Luisa', apellido: 'Gonzales', nota: 2.2},
    {codigo: 5, nombre: 'Maira', apellido: 'Quintero', nota: 3.3},
    {codigo: 6, nombre: 'Yeison', apellido: 'Jimenez', nota: 1},
    {codigo: 7, nombre: 'Luis', apellido: 'Cortez', nota: 4.5},
    {codigo: 8, nombre: 'Valentina', apellido: 'Gomez', nota: 3.1},
    {codigo: 9, nombre: 'Monica', apellido: 'Rendón', nota: 2.9},
    {codigo: 10, nombre: 'Diego', apellido: 'Alvarez', nota: 3}
  ];

}

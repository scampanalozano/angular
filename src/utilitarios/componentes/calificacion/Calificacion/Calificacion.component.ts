import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-Calificacion',
  templateUrl: './Calificacion.component.html',
  styleUrls: ['./Calificacion.component.css']
})
export class CalificacionComponent implements OnInit {
 
  @Input() calificacion: number = 0;
  @Output() accion = new EventEmitter<any>();
  lista: Array<any> = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.calificacion; i++) {
      this.lista.push(1);
    }

  }
 select(){
  this.accion.emit(this.calificacion)
 }

}

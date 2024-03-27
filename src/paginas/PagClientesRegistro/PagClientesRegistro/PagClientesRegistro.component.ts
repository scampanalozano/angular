import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl  } from '@angular/forms';
import { ClienteService } from '../../../servicios/Cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagClientesRegistro',
  templateUrl: './PagClientesRegistro.component.html',
  styleUrls: ['./PagClientesRegistro.component.css']
})
export class PagClientesRegistroComponent implements OnInit {
  
  formulario: FormGroup;
  constructor(
    private clienteService :ClienteService,
    private formBuilder: FormBuilder
  ) { 
    this.formulario = this.formBuilder.group({
      "nombre": ['', [Validators.required]],
      "apellido": ['', [Validators.required]],
      "password": [],
      "telefono": [],
      "email": [],
    })
  }

  ngOnInit() {
  }

  guardar() {
    if (this.formulario.valid) {
      this.clienteService.insertarCliente({...this.formulario.value}).subscribe(
        respuesta =>{
          if(respuesta.codigo == "1"){
            Swal.fire({
              title: "Mensaje",
              text: "Vehiculo registrado correctamente",
              icon: "success"
            }).then(res =>{
              this.formulario.reset();
            });
          }else{
            Swal.fire({
              title: "Mensaje",
              text: "No se pudo registrar",
              icon: "error"
          })
          }
        }
      )

    }else{
      Swal.fire({
        title: "Mensaje",
        text: "Falta llenar campos",
        icon: "error"
    })
    }
      
  }

}




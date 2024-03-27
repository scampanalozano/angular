import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Vehiculo, VehiculosService } from '../../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-PagVehiculosRegistro',
  templateUrl: './PagVehiculosRegistro.component.html',
  styleUrls: ['./PagVehiculosRegistro.component.css']
})
export class PagVehiculosRegistroComponent implements OnInit {


  formulario: FormGroup;
  constructor(
    private vehiculoService: VehiculosService,
    private formBuilder: FormBuilder
  ) {

    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validarCodigo()]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio": ['', [Validators.required]],
      "kilometraje": ['', [Validators.required]],
      "precio": ['', [Validators.required]],
      "calificacion": ['', [Validators.required]]
    })

  }

  ngOnInit() {

  }

  guardar() {
    if (this.formulario.valid) {
      this.vehiculoService.insertarVehiculo({...this.formulario.value}).subscribe(
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

export function validarCodigo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoVali = /^[A-Z]\d{4}$/;
    let value = control.value;
    if (codigoVali.test(value)) {
      return null;
    }
    return { 'codigoValidate': true };

  }

}

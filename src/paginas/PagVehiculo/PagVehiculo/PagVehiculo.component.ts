import { Component, OnInit } from '@angular/core';
import { Vehiculo, VehiculosService } from '../../../servicios/Vehiculo.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {
  formulario: FormGroup;
  vehiculo ?: Vehiculo;
  constructor(
    private vehiculoService : VehiculosService,
    private formBuilder: FormBuilder,
    private activateRoute : ActivatedRoute
  ) { 

    this.formulario = this.formBuilder.group({
      "codigo": ['',[Validators.required]],
      "marca": [],
      "modelo":[],
      "anio": [],
      "color": [],
      "kilometraje":[],
      "precio": [],
      "calificacion": []
    })
    this.formulario.controls['codigo'].disable;
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{
      this.vehiculoService.getVehiculo(params['codigo']).subscribe( data =>{
        if(data.codigo =='1'){
          this.vehiculo= data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo)
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca)
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo)
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio)
          this.formulario.controls['color'].setValue(this.vehiculo?.color)
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje)
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio)
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion)
        }
        

      })
    })
  }

 

}

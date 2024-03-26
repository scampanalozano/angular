import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
   
  public mostrarImagen = true;
  public filtro : string ="";
  public rows:number=10;
  public pages:number =1;

  listaVehiculos: Array<any>= []

  constructor(
    private vehiculosService : VehiculosService
  ) {
    
    
   }

  ngOnInit() {
    console.log('funciona')
    this.consultarVehiculos();
  }

  consultarVehiculos(){
    this.vehiculosService.getVehiculos(this.filtro, this.rows,this.pages).subscribe(respuesta =>{
      if(respuesta.codigo == '1'){
        this.listaVehiculos= respuesta.data;
        this.pages = respuesta.page;
        
      }
    })
  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  eliminar(codigo:String){
    Swal.fire({
      title: "¿Estas seguro de eliminar este registro",
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText:'No',
      icon:"question"
    
    }).then((res)=>{
      this.vehiculosService.eliminarVehiculo(codigo).subscribe(data =>{
        if(data.codigo == "1"){
          this.consultarVehiculos();
          Swal.fire({
            title: "Mensaje",
            text: "Vehiculo eliminado correctamente",
            icon: "success"

          })
        }
      })
    })

  }



  recepcion(dato:number){
    console.log('Dato', dato)
  }

  

}

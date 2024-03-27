import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteService } from '../../../servicios/Cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaCliente',
  templateUrl: './PagListaCliente.component.html',
  styleUrls: ['./PagListaCliente.component.css']
})
export class PagListaClienteComponent implements OnInit {
  public filtro : string ="";
  public rows:number=10;
  public pages:number =1;

  listaClientes: Array<any>= []
  constructor(
    private clienteService : ClienteService
  ) { }

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes(){
    this.clienteService.getClientes(this.filtro, this.rows,this.pages).subscribe(respuesta =>{
      if(respuesta.codigo == '1'){
        this.listaClientes= respuesta.data;
        this.pages = respuesta.page;
        
      }
    })
  }

  eliminar(codigo:String){
    Swal.fire({
      title: "¿Estas seguro de eliminar este registro",
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText:'No',
      icon:"question"
    
    }).then((res)=>{
      this.clienteService.eliminarVehiculo(codigo).subscribe(data =>{
        if(data.codigo == "1"){
          this.consultarClientes();
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

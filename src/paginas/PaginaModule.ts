import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from '../paginas/PagListaVehiculos/PagListaVehiculos.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { HttpClientModule } from "@angular/common/http";
import { PagVehiculosRegistroComponent } from "./PagVehiculosRegistro/PagVehiculosRegistro/PagVehiculosRegistro.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo/PagVehiculo.component";
import { EditarVehiculoComponent } from "./EditarVehiculo/EditarVehiculo/EditarVehiculo.component";
import { PagListaClienteComponent } from "./PagListaCliente/PagListaCliente/PagListaCliente.component";
import { PagClientesRegistroComponent } from "./PagClientesRegistro/PagClientesRegistro/PagClientesRegistro.component";


@NgModule({

   
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
        
     ],
     declarations:[
        PagListaVehiculosComponent,
        PagVehiculosRegistroComponent,
        PagVehiculoComponent,
        EditarVehiculoComponent,
        PagListaClienteComponent,
        PagClientesRegistroComponent
        
       
        
    ],
    exports:[
        PagListaVehiculosComponent,
        PagVehiculosRegistroComponent,
        PagVehiculoComponent,
        EditarVehiculoComponent,
        PagListaClienteComponent, 
        PagClientesRegistroComponent
       
    ]


})

export class PaginaModule{

}
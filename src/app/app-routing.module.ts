import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../paginas/Home/Home/Home.component';
import { PagListaVehiculosComponent } from '../paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagNotFoundComponent } from '../paginas/PagNotFound/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from '../paginas/PagVehiculo/PagVehiculo/PagVehiculo.component';
import { PagVehiculosRegistroComponent } from '../paginas/PagVehiculosRegistro/PagVehiculosRegistro/PagVehiculosRegistro.component';
import { EditarVehiculoComponent } from '../paginas/EditarVehiculo/EditarVehiculo/EditarVehiculo.component';

const routes: Routes = [
{
  path:"home",
  component: HomeComponent
},
{
  path:"vehiculos",
  component: PagListaVehiculosComponent,  
},
{
  path:"vehiculo",
  component: PagVehiculosRegistroComponent,
  pathMatch:'full'
},
{
  path:"vehiculos/:codigo",
  component: PagVehiculoComponent,
  pathMatch:'full'
},
{
  path:"vehiculo/:codigo",
  component: EditarVehiculoComponent,
  pathMatch:'full'
},
{
  path: " ",
  component: HomeComponent,
  pathMatch: "full"

},
{
  path: "**",
  component: PagNotFoundComponent,
  pathMatch: "full"

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

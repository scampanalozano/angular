import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./pipe/AEspacio.pipe";
import { CalificacionComponent } from "./componentes/calificacion/Calificacion/Calificacion.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        AEspacioPipe,
        CalificacionComponent
    ],
    imports : [
        CommonModule
    ],
    exports: [
        AEspacioPipe,
        CalificacionComponent
    ]

})

export class UtilitariosModule {

}
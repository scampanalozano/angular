import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(value: string, buscar: string): any {
    const valorRemplazo = " ";
    return value.replace(buscar, valorRemplazo);
    
  }

}

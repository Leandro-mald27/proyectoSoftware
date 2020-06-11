import { Pipe, PipeTransform } from '@angular/core';
import { Panela } from '../Produccion/models/panela';


@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(panela: Panela[], searchText: string): any {
    if (searchText == null) { return panela; }
    return panela.filter(p => p.responsable.toLowerCase().indexOf(searchText.toLowerCase()) !== -1||
      p.idregistro.indexOf(searchText) !== -1);
  }



}

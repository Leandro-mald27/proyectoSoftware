import { Component, OnInit } from '@angular/core';
import { PanelaService } from 'src/app/services/panela.service';
import { Panela } from '../models/panela';

@Component({
  selector: 'app-panela-consulta',
  templateUrl: './panela-consulta.component.html',
  styleUrls: ['./panela-consulta.component.css']
})
export class PanelaConsultaComponent implements OnInit {
  searchText:string;
  panelas:Panela[];
  
  constructor(private panelaService: PanelaService) { }

  ngOnInit() {

    this.panelaService.get().subscribe(result => {
      this.panelas = result;
    });



  }
  delete(panela: Panela): void {
    var validar=confirm('Desea elimiar?');
    if(validar==true){
      this.panelas = this.panelas.filter(h => h !== panela);
      this.panelaService.delete(panela).subscribe();
      this.ngOnInit();
    }
  }
  buscar(id: string):void{
    if(id!=""){
      
    }

  }
  
}

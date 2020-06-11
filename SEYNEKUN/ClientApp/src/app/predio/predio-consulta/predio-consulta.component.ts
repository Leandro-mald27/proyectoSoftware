import { Component, OnInit } from '@angular/core';
import {PredioService} from 'src/app/services/predio.service';
import {Predio} from '../models/predio';
@Component({
  selector: 'app-predio-consulta',
  templateUrl: './predio-consulta.component.html',
  styleUrls: ['./predio-consulta.component.css']
})
export class PredioConsultaComponent implements OnInit {
  searchText:string;
  predios:Predio[];
  constructor(private predioService:PredioService) { }

  ngOnInit() {
    this.predioService.get().subscribe(result => {
      this.predios = result;
    });
  }

}

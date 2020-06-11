import { Component, OnInit } from '@angular/core';
import { ProductorService } from 'src/app/services/productor.service';
import { Productor} from '../models/productor';
@Component({
  selector: 'app-productor-consulta',
  templateUrl: './productor-consulta.component.html',
  styleUrls: ['./productor-consulta.component.css']
})
export class ProductorConsultaComponent implements OnInit {
  searchText:string;
  productores:Productor[];
  constructor(private productorService: ProductorService) { }

  ngOnInit() {
    this.productorService.get().subscribe(result => {
      this.productores = result;
    });
  }

}

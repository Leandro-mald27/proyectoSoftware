import { Component, OnInit } from '@angular/core';
import { Panela } from '../models/panela';
import { PanelaService } from 'src/app/services/panela.service';


import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-panela-registro',
  templateUrl: './panela-registro.component.html',
  styleUrls: ['./panela-registro.component.css']
})
export class PanelaRegistroComponent implements OnInit {
  formGroup: FormGroup;
  panela:Panela;
  constructor(private panelaService: PanelaService, private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.panela= new  Panela();
    this.buildForm();
  }

  private buildForm() {

    this.panela = new Panela();

this.panela.idregistro = '';

this.panela.fechaIngreso = new Date();

this.panela.numeroLote = '';

this.panela.numeroLoteAgricola = '';

this.panela.etapas = '' ;

this.panela.cantidad = '' ;

this.panela.responsable = '' ;
this.panela.unidad='';

this.formGroup = this.formBuilder.group({

idregistro: [this.panela.idregistro, Validators.required],

fechaIngreso: [this.panela.fechaIngreso, Validators.required],

numeroLote: [this.panela.numeroLote, [Validators.required, Validators.min(1)]],
numeroLoteAgricola: [this.panela.numeroLoteAgricola, [Validators.required,  Validators.min(1)]],
etapas: [this.panela.etapas, Validators.required],
cantidad: [this.panela.cantidad, [Validators.required, Validators.min(1)]],
unidad:[this.panela.unidad,[Validators.required,Validators.min(1)]],
responsable: [this.panela.responsable, Validators.required]

});
    }
    get control() {

      return this.formGroup.controls;
      
      }
      onSubmit() {

        if (this.formGroup.invalid) {
        
        return;
        
        }
        
        this.add();
        
        }
  add() {
    this.panela = this.formGroup.value;
    this.panelaService.post(this.panela).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Producto creado!!! :-)';
     
        this.panela = p;
      }
    });
  }
}

  

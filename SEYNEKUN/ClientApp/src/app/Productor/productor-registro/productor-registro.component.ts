import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
import { Productor } from '../models/productor';
import { ProductorService } from 'src/app/services/productor.service';
import{PredioService} from 'src/app/services/predio.service';
import{Predio} from 'src/app/predio/models/predio';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-productor-registro',
  templateUrl: './productor-registro.component.html',
  styleUrls: ['./productor-registro.component.css']
})
export class ProductorRegistroComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private stepper: Stepper;
  predio: Predio;
productor: Productor;
formGroup: FormGroup;
formGroup2: FormGroup;
  constructor(private productorService:ProductorService,private _formBuilder: FormBuilder,private predioService:PredioService,private modalService: NgbModal) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.buildForm();
    this.buildForm2();
  }
  
  private buildForm() {
    this.productor = new Productor();

this.productor.cedula = '';

this.productor.nombre = '';

this.productor.codigoProductor = '';

this.productor.numeroTelefonico= '';

this.productor.afiliacion = '' ;

this.productor.actividad = '' ;



    this.formGroup = this._formBuilder.group({
      cedula: [this.productor.cedula, Validators.required],

      nombre: [this.productor.nombre, Validators.required],
      
      codigoProductor: [this.productor.codigoProductor, Validators.required],
      
      numeroTelefonico: [this.productor.numeroTelefonico, [Validators.required, Validators.min(1)]],
      afiliacion : [this.productor.afiliacion, Validators.required],
      actividad: [this.productor.actividad, Validators.required],


     });
  }
  private buildForm2() {
    this.predio = new Predio();

this.predio.codigo = '';

this.predio.nombre = '';

this.predio.codigoICA = '';

this.predio.vereda = '';

this.predio.municipio = '' ;




    this.formGroup2 = this._formBuilder.group({
      codigo: [this.predio.codigo, Validators.required],

      nombre: [this.predio.nombre, Validators.required],
      
      codigoICA: [this.predio.codigoICA, Validators.required],
      
      vereda: [this.predio.vereda, [Validators.required, Validators.min(1)]],
      municipio : [this.predio.municipio, Validators.required],
     
     });
  }
  get control() {

    return this.formGroup.controls;
    
    }
    get control2() {

      return this.formGroup2.controls;
      
      }
  next() {
    this.stepper.next();
  }
  onSubmit() {
    if (this.formGroup.invalid) {

      return;
      
      }
      
      this.add();
  }
  onSubmit2() {
    if (this.formGroup2.invalid) {

      return;
      
      }
      
      this.addPredio();
  }
  add(){
    this.productor = this.formGroup.value;
    this.productorService.post(this.productor).subscribe(p => {

      if (p != null) {
      
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Productor creado!!! :-)';
      
      this.productor= p;
      
      }
      
      });
  }
  addPredio(){
    this.predio= this.formGroup2.value;
    this.predioService.post(this.predio).subscribe(pp=>{
      if(pp !=null){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Predio creado!!! :-)';
        this.predio=pp;
      }
    });
  }
  addGeneral(){
    this.add();
    this.addPredio()
  }
  
  generatePdf(){
    const documentDefinition = { content: [{
    text: 'Registro De Productores',
    bold: true,
    fontSize: 20,
    alignment: 'center',
    color: 'green',
    margin: [0, 0, 0, 20]},{
      columns:[[{
        text:'Cedula: ' + this.formGroup.value.cedula
              
      },
    {
      text:'Nombre Completo: ' + this.formGroup.value.nombre
    },
    {
      text:'Telefono: ' + this.formGroup.value.numeroTelefonico
    },
  {
    text:'Afiliacion: ' + this.formGroup.value.afiliacion
  },
{
  text:'Actividad: ' + this.formGroup.value.actividad
},
{
  text:'' 
},
{
  text:'' 
},
{
  text:'' 
},
{
  text: 'Informancion Predio',
    bold: true,
    fontSize: 20,
    alignment: 'center',
    color: 'green',
    margin: [0, 0, 0, 40]
},
{
  text:'Codigo: '+ this.formGroup2.value.codigo
},
{
  text:'Nombre: '+ this.formGroup2.value.nombre
},
{
  text:'Codigo ICA: '+ this.formGroup2.value.codigoICA
},
{
  text:'Municipio: '+ this.formGroup2.value.municipio
},
{
  text:'Vereda: '+ this.formGroup2.value.vereda
},
{
  text: '',
    bold: true,
    fontSize: 20,
    alignment: 'center',
    color: 'green',
    margin: [0, 0, 0, 40]
},
{
  text:'Firma Productor:______________________________' + ' '+'Cedula Productor:____________________________'
}]]
    }
    
  ],styles: {
    name: {
      fontSize: 16,
      bold: true
    }
  } };
    pdfMake.createPdf(documentDefinition).open();
   }

}

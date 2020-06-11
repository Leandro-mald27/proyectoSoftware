import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  submitted: boolean;
  loading: boolean;

  constructor(

    private formBuilder: FormBuilder,
    
    private route: ActivatedRoute,
    
    private router: Router,
    
    private authenticationService: AutenticacionService,
    
    private modalService: NgbModal
    
    ) {
    
    // redirect to home if already logged in
    
    if (this.authenticationService.currentUserValue) {
    
    this.router.navigate(['/']);
    
    }
    
    }
    
    ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
    
    userName: ['', Validators.required],
    
    password: ['', Validators.required]
    
    });
    
    // get return url from route parameters or default to '/'
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
    }
    // convenience getter for easy access to form fields

get f() { return this.loginForm.controls; }

onSubmit() {

this.submitted = true;

// stop here if form is invalid

if (this.loginForm.invalid) {

return;

}

this.loading = true;

this.authenticationService.login(this.f.userName.value, this.f.password.value)

.pipe(first())

.subscribe(

data => {

this.router.navigate([this.returnUrl]);

},

error => {

const modalRef = this.modalService.open(AlertModalComponent);

modalRef.componentInstance.title = 'Acceso Denegado';

modalRef.componentInstance.message = error.error;

this.loading = false;

});

}

}

import { Component } from '@angular/core';
import { Usuario } from '../seguridad/usuario';

import { Router } from '@angular/router';

import { AutenticacionService } from '../services/autenticacion.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

currentUser: Usuario;

constructor(

private router: Router,

private authenticationService: AutenticacionService

) {

this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logout() {

    this.authenticationService.logout();
    
    this.router.navigate(['/login']);
    
    }
}

import { UserService } from './user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  canActivate(){
    if (localStorage.getItem('Tokn')) {
      return true
     } 
     else
     {
        this.router.navigate(['login']);
       return false
     }
  }
  constructor(private userServ:UserService, private router: Router) { }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouteReuseStrategy, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, pipe, take } from 'rxjs';
import { LoginService } from '../components/login/service/login.service';
import { RegisterService } from '../components/register/services/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private loginService: LoginService, 
            private router: Router,
            private registerService: RegisterService
            ) {}



  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
      if(this.loginService.isLogged()){
        return true;
      } else {
        this.router.navigate(['/login'])
        return false
      }

  
  }

  // private isUserLoggedIn(): boolean {
  //   if(this.loginService.isLogged()) return true;
  //   this.router.navigate(['/login']);
  //   return false;
  }











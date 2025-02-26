import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _route: Router, private _token: TokenStorageService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const currentUser = this._token.getUser();
    console.log(currentUser)
    if (currentUser) {
      console.log(currentUser)
      return true;
    }
    this._route.navigate(['/login']);
    console.log("foi pra login")
    return false;
  }
}

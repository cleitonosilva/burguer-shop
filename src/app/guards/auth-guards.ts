import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../pages/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuards implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
    
  }
}

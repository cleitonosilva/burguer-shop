import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private userAuth: boolean = false;




  constructor(private router: Router) { }

  fazerLogin(usuario: User){
    if ( usuario.email === 'com' &&
         usuario.senha === '123456'
    ) {
        this.userAuth = true;
        this.router.navigate(['/carrinho']);
      } else (
      this.userAuth = false
    )
  }

  usuarioEstaAutenticado(){
    return this.userAuth;
  }


}

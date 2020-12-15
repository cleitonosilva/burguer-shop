import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private userAuth: boolean = false;


  constructor(private router: Router) { }

  fazerLogin(usuario: User){
    if ( usuario.email === 'usuario@email.com' &&
         usuario.senha === '123456'
    ) {
        this.userAuth = true;
        this.router.navigate(['/']);
    } else (
        this.userAuth = false
    )

  }

}

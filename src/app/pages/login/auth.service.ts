import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/services/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private userAuth: boolean = false;
register: Register[] = []
registerSelect: any



  constructor(private router: Router, private registerService: RegisterService) { }

  fazerLogin(usuario: User){

    this.registerService.getUser().subscribe(
      x => {this.register = x
    
    const useremail = this.register.find(x => x.email == usuario.email)
        
    if ( usuario.email == String(useremail?.email) &&
         usuario.senha == String(useremail?.senha)
    ) {
        this.userAuth = true;
        this.router.navigate(['/carrinho']);
      } else (
      this.userAuth = false,
      this.router.navigate(['/cadastro'])

    )
      }
    )
  }

  usuarioEstaAutenticado(){
    return this.userAuth;
  }


}

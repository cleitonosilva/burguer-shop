import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/services/register.service';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

private userAuth: boolean = false;
register: Register[] = []
registerSelect: any
registerLog: any



  constructor(
    private router: Router,
    private registerService: RegisterService,
    private toastr: ToastrService) { }

  fazerLogin(usuario: User){

    this.registerService.getUser().subscribe(
      x => {this.register = x
    
    const useremail = this.register.find(x => x.email == usuario.email)
        
    if ( usuario.email == String(useremail?.email) &&
         usuario.senha == String(useremail?.senha)
    ) {
        this.registerLog = useremail
        const userLog = localStorage['userLog'] ? JSON.parse(localStorage['userLog']) : [];
    
        userLog.push({
          id: useremail?.id,
          email: useremail?.email,
          endereco: useremail?.endereco,
          telefone: useremail?.telefone,
          pontoReferencia: useremail?.pontoReferencia,
          nome: useremail?.nome,
          sobrenome: useremail?.sobrenome,
        });
  
        localStorage.setItem('userLog', JSON.stringify(userLog));

        this.userAuth = true;
        this.showSuccess("login efetuado com sucesso")
        this.router.navigate(['/carrinho']);
    }
    
    else if (  usuario.email == String(useremail?.email) &&
      usuario.senha !== "" ){
        this.userAuth = false,
        this.showError("O campo Senha precisa ser preenchido!")
        
      } 

    else if (  usuario.email == String(useremail?.email) &&
      usuario.senha !== String(useremail?.senha)){
      this.userAuth = false,
      this.showError("Senha Incorreta")
      } 

      else if(usuario.email == undefined){
        this.userAuth = false,
        this.showWarn(`Por favor insira um email ou cadastra-se!`)
      }    
      else (
      this.userAuth = false,
      this.showWarn(`Email ${usuario.email} não cadastrado!`),
      this.router.navigate(['/cadastro'])
      )
    }
    )
  }

  usuarioEstaAutenticado(){
    return this.userAuth;
  }


  showSuccess(msg: string) {
    this.toastr.success(msg);
  }

  showError(msg: string) {
    this.toastr.error(msg)
  }
  
  showWarn(msg: string) {
    this.toastr.info(msg)
  }
}



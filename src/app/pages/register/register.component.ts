import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { RegisterService} from '../../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  user : Register = new Register;

  constructor(
    private fb: FormBuilder,
    private registerService : RegisterService) { }

  ngOnInit(): void {

    this.criarFormularioDeUsuario();
  }

  fazerCadastro(){
    const dadosFormulario = this.formRegister.value;
    const senhasCorreta = this.confirmarSenha( dadosFormulario.senha, dadosFormulario.confirmarSenha);
    if (!senhasCorreta){
      return ; 
      
    }
    // ENTRAR O SERVIÇO 
    this.registerService.createUser(this.formRegister.value).subscribe(
      success => {
        return console.log('sucesso');
      },
      error => console.log ('error'),
      () => console.log('request completo')
    );
    console.log(this.formRegister.value)
    this.formRegister.reset();
      
  
  }

  private criarFormularioDeUsuario() {
    this.formRegister = this.fb.group({
      email: ['', Validators.required] ,
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
      pontoReferencia: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['',Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required]
    })
  };
  
  confirmarSenha( senha : string, confirmarSenha : string ) : boolean {
   
    // if (confirmarSenha === senha) {
    //   return true;
    // }
    // else return false
    return senha === confirmarSenha
  }
  
  // get confirmarSenha() {
  // return this.formRegister.get('confirmarSenha');
  // }

}           


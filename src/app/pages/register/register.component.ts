import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { Validacoes } from './validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder) { }

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


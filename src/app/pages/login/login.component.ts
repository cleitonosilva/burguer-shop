import { Component, OnInit } from '@angular/core';
import {AuthService} from'./auth.service';
import {User} from '../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public usuario: User = new User();

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }
  
  fazerLogin() {
    // console.log(this.usuario)
    this.AuthService.fazerLogin(this.usuario); 
  }

}

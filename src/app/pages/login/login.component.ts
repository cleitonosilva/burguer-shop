import { Component, Input, OnInit, Output } from '@angular/core';
import {AuthService} from'./auth.service';
import {User} from '../../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

userAuth: boolean


public usuario: User = new User();


constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  
  fazerLogin() {
    // console.log(this.usuario)
    this.authService.fazerLogin(this.usuario); 

    
    
  }

}

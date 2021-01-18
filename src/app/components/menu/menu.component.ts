import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/pages/login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // isCollapsed = true;

  constructor(private authService: AuthService) { }

  
  ngOnInit(): void {

  }




}

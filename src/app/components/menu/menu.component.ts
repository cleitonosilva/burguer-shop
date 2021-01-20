import { Component, OnInit, Input, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { Produto } from 'src/app/models/products.model';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { AuthService } from 'src/app/pages/login/auth.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  produtosVindoDaPagina: Produto []
  itemQuantidade = 0
  itemControle: boolean = false
  item: Item[] 
  authUser: boolean = false
  constructor(private authService: AuthService, private produtosService : ProdutosService) { }

  
  ngOnInit(): void {
    // this.produtosService.currentMenssage.subscribe(users => console.log(users) ); ;

     const storageValue = JSON.parse(String(localStorage.getItem('cart')));
      this.produtosVindoDaPagina = storageValue;
      if(this.produtosVindoDaPagina){

        if(this.produtosVindoDaPagina.length > 0 ){
          this.itemControle = true
        }
        
      }
      this.authUser = this.authService.usuarioEstaAutenticado()
      console.log(this.authUser)
  }

}

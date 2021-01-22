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
  @Input() RecebeItens: Produto[];
  
  produtosVindoDaPagina: Produto []
  itemQuantidade = 0
  itemControle: boolean = false
  item: Item[] 
  authUser: boolean = false
  numeroCarrinho: number = 0
  valor: number 
  constructor(private authService: AuthService, private produtosService : ProdutosService) { }

  
  ngOnInit(): void {
    // this.produtosService.currentMenssage.subscribe(users => console.log(users) ); ;

    this.produtosService.getValor().subscribe(novoValor => this.valor = novoValor)
    
     const storageValue = JSON.parse(String(localStorage.getItem('cart')));
      this.produtosVindoDaPagina = storageValue;
      if(this.produtosVindoDaPagina){

        if(this.produtosVindoDaPagina.length > 0 ){
          this.itemControle = true;
          for ( let item of this.produtosVindoDaPagina){
              const soma = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
              this.produtosService.emitirValor(soma);     
            }
          }
        };
      
      
     

      // console.log(this.produtosVindoDaPagina);

      // const somaDosValores = this.produtosVindoDaPagina.reduce( (a,b) => a + b.quantidade, 0 );
      // this.produtosService.emitirValor(somaDosValores);      
      


      this.authUser = this.authService.usuarioEstaAutenticado();
      
  };

}

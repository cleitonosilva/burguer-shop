import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/products.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  produtos: Produto [] = []
  produtosVindoDaPagina: Produto []
  preco: string
  totalItens: number =1
  itemQuantidade: number = 0
  valorTotal: number = 0
  item: Item []

  constructor(public produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    // debugger

    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;

    
    if(this.produtosVindoDaPagina){
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( x =>
        ({...x, quantidade: x.quantidade > 1 ? x.quantidade : 1 , valorTotal: x.quantidade >1 ? x.preco * x.quantidade: x.preco}))
        
        
        // this.itemQuantidade = this.produtosVindoDaPagina.length
     
    
     for(let i of this.produtosVindoDaPagina){
       this.itemQuantidade += i.quantidade
       this.valorTotal += i.valorTotal 
    }
    }

   }

  decrement(item : Produto){
    if(item.quantidade > 1 ){
      
      const atualizar =
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id === item.id ? ({...x, quantidade: x.quantidade - 1}) : x)

      localStorage.setItem('cart', JSON.stringify(atualizar));
      
      const storageValue = JSON.parse(String(localStorage.getItem('cart')));
      this.produtosVindoDaPagina = storageValue;

      const atualizarValor =  this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)

        localStorage.setItem('cart', JSON.stringify(atualizarValor));
      
        this.itemQuantidade--

        this.valorTotal -= item.preco
        

      }

    
    }

    increment(item: Produto){
      const atualizar = 
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id === item.id ? ({...x, quantidade: x.quantidade + 1}) : x)
        this.itemQuantidade++
        this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
          x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)
          
          localStorage.setItem('cart', JSON.stringify(atualizar));
        // ----------------------------- A representa o valor inicial B representa o proximo valor da lista a ser somado com o passado que é o A
        this.valorTotal = this.produtosVindoDaPagina.reduce((a,b) => a + b.valorTotal, 0 )
        }

    finishCar(){
      localStorage.clear();
      window.location.reload()
      this.router.navigate([''])
    }

    // totalItensMenu(total : number){
      
    // }
}



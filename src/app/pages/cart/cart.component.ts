import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/products.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  
  constructor(public produtosService: ProdutosService, private router: Router) { }
  
  ngOnInit(): void {
    
    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;
    
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( x => ({...x, quantidade: 1, valorTotal: x.preco}))
    
    this.produtosService.getProdutos().subscribe(x =>{ 
      this.produtos = x
    })
    this.itemQuantidade = this.produtosVindoDaPagina.length

    for(let i of this.produtosVindoDaPagina){
      this.valorTotal += i.valorTotal 
    }
    
  }
  
  decrement(item : Produto){
    if(item.quantidade > 1 ){
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id == item.id ? ({...x, quantidade: x.quantidade - 1}) : x)
        this.itemQuantidade--
        this.valorTotal -= item.preco  
      }
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( 
      x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)
    }
    
    increment(item: Produto){
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id === item.id ? ({...x, quantidade: x.quantidade + 1}) : x)
        this.itemQuantidade++

        this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( 
          x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)

        // ----------------------------- A representa o valor inicial B representa o proximo valor da lista a ser somado com o passado que é o A 
        this.valorTotal = this.produtosVindoDaPagina.reduce((a,b) => a + b.valorTotal, 0 )  
        }
        
    finishCar(){
      localStorage.clear();
      this.router.navigate([''])
    }


}
        
      

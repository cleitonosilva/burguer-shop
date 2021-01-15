import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/products.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantidadeInicial: number = 0;
  valorTotal: number = 0; 
  valorProduto: number 
  produtos: Produto [] = []
  produtosVindoDaPagina: Produto []
  produtosSoma : Produto
  preco: string

  constructor(public produtosService: ProdutosService) { }
  
  ngOnInit(): void {

    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;
    
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( x => ({...x, quantidade: 1, valorTotal: x.preco}))
    
    
    this.valorTotal= (this.valorProduto * this.quantidadeInicial)
    this.produtosService.getProdutos().subscribe(x =>{ 
    this.produtos = x
  })
  }

  decrement(item : Produto){
    if(item.quantidade > 1 ){
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
      x => x.id == item.id ? ({...x, quantidade: x.quantidade - 1}) : x)
    }
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( 
      x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)
  }
    
    increment(item: Produto){
    
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
      x => x.id === item.id ? ({...x, quantidade: x.quantidade + 1}) : x)
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( 
        x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)
    }


  pegarValor(valor : any){
    
  }

}

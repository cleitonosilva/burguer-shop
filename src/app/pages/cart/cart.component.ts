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
  produtoQuantidade: Produto[]
  preco: string
  totalItens: number =1
  itemQuantidade: number
  valorTotal: number = 0
  item: Item []

  constructor(public produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {

    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;

    if(this.produtosVindoDaPagina){
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( x => 
    ({...x, quantidade: 1, valorTotal: x.preco}));
    
    for (let item of storageValue){
      const a = item.quantidade;
      this.itemQuantidade = a;
      this.item = a;
      this.valorTotal += item.valorTotal;
   };
  
   };

  }

  decrement(item : Produto){
    if(this.itemQuantidade > 1 ){
      
      this.itemQuantidade--
      const enviar =
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id == item.id ? ({...x, quantidade: this.itemQuantidade  }) : x)
        
        this.itemQuantidade = this.produtosVindoDaPagina.reduce((a,b) => a + b.quantidade, 0 )



        localStorage.setItem('cart', JSON.stringify(enviar));
      
        // console.log(this.produtosVindoDaPagina)

      //   const menos = this.itemQuantidade

      // let gru =  JSON.parse(String(localStorage.getItem('cart'))); 
      // gru = gru.map((x: any[]) => x.id == item.id ? ({...x, quantidade: menos}) : x)
      
      
     
        
      this.valorTotal -= item.preco

      }

    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
      x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)
    }

    increment(item: Produto){
      const mais = 
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id === item.id ? ({...x, quantidade: x.quantidade + 1}) : x)

        this.itemQuantidade = this.produtosVindoDaPagina.reduce((a,b) => a + b.quantidade, 0 )

        localStorage.setItem('cart', JSON.stringify(mais));


        this.itemQuantidade++
       const maisMore =
        this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
          x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)
          localStorage.setItem('cart', JSON.stringify(maisMore));
        
        this.valorTotal = this.produtosVindoDaPagina.reduce((a,b) => a + b.valorTotal, 0 )
        }

    finishCar(){
      localStorage.clear();
      window.location.reload()
      this.router.navigate([''])
    }

      
}



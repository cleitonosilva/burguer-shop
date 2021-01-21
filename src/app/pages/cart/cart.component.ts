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

    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;


    // const storageValueItem = JSON.parse(String(localStorage.getItem('item')));
    // this.item = storageValueItem;

    if(this.produtosVindoDaPagina){
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( x => ({...x, quantidade: 1, valorTotal: x.preco}))}

    this.produtosService.getProdutos().subscribe(x =>{
      this.produtos = x
    })

    if(this.produtosVindoDaPagina){
    this.itemQuantidade = this.produtosVindoDaPagina.length
    }

    if(this.produtosVindoDaPagina){
      for(let i of this.produtosVindoDaPagina){
        this.valorTotal += i.valorTotal
      }
    }
  }

  decrement(item : Produto){
    if(item.quantidade > 1 ){
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id === item.id ? ({...x, quantidade: x.quantidade - 1}) : x)

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



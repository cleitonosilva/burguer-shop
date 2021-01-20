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

    // Traz o [] de produtos selecionados via local storage tira do json e popula a variavel
    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;


    const storageValueItem = JSON.parse(String(localStorage.getItem('item')));
    this.item = storageValueItem;

    // acrescenta a quantidade inicial vindo da pagina como 1 e o valor total com o preço do seu respectivo item  
    if(this.produtosVindoDaPagina){
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map( x => ({...x, quantidade: 1, valorTotal: x.preco}))}

    // deixa disponiveis todos os produtos do banco 
    this.produtosService.getProdutos().subscribe(x =>{
      this.produtos = x
    })

    // Recebe o valor incial de produtos tendo em vista que cada produto inicia com 1 acrescido acima ou seja é o mesmo tamanho do lenght []
    if(this.produtosVindoDaPagina){
    this.itemQuantidade = this.produtosVindoDaPagina.length
    }

    // Ele percorre com for e soma os valores de valortotal para incrementar o valor inicial
    if(this.produtosVindoDaPagina){
      for(let i of this.produtosVindoDaPagina){
        this.valorTotal += i.valorTotal
      }
    }
  }

  // funcao que decrementa a quantidade de produtos 
  decrement(item : Produto){
    if(item.quantidade > 1 ){
      // valor menor que 1 não deixa números negativos 
      //  produtosVindoDaPagina recebe ele mesmo com o parametro atualizado que é quantidade já passado acima - 1
      this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
        x => x.id === item.id ? ({...x, quantidade: x.quantidade - 1}) : x)

        // decrementa o valor total de itens que o length do array é o valor inicial 
        this.itemQuantidade--

        // diminui o valor do produto no preço total do carrinho
        this.valorTotal -= item.preco

      }

      // atualiza o valor total do produto unitário com base na quantidade passada pelo decrement ou increment
    this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(
      x => x.id == item.id ? ({...x, valorTotal: x.preco * x.quantidade}) : x)
    }

  // funcao que incrementa a quantidade de produtos 
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
      window.location.reload()
      this.router.navigate([''])
    }

    // totalItensMenu(total : number){
      
    // }
}



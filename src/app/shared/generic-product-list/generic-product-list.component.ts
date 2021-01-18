import { Component, OnInit, Input } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import {Produto} from '../../models/products.model'


@Component({
  selector: 'app-generic-product-list',
  templateUrl: './generic-product-list.component.html',
  styleUrls: ['./generic-product-list.component.scss']
})
export class GenericProductListComponent implements OnInit {
  @Input() produtos: Produto[];

  produtoSelecionado: Produto;
  listaDeProdutos : Produto [] = []

  constructor(public produtosService : ProdutosService) { }

  
  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(x  => {
    this.listaDeProdutos = x})
  }
  
  ProdutoSelecionado(produto: any){
    
    const list =  this.listaDeProdutos.find(p => p.produto == produto.value)
    if (list){
      this.produtoSelecionado = list
    }

  }
  
  
  Adicionar(){
    
      const cart = localStorage['cart'] ? JSON.parse(localStorage['cart']) : [];
    
      cart.push({
        produto: this.produtoSelecionado.produto,
        id: this.produtoSelecionado.id,
        preco: this.produtoSelecionado.preco,
        url: this.produtoSelecionado.url,
        categoria: this.produtoSelecionado.categoria,
        descricao: this.produtoSelecionado.descricao,
        grif: this.produtoSelecionado.grif
      });
      
      localStorage.setItem('cart', JSON.stringify(cart));
  }
}




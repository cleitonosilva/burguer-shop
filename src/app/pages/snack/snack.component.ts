import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/services/produtos.service';
import {Produto} from '../../models/products.model'

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {
  produtos: Produto[];

  constructor(private produtoService : ProdutosService) { }

  ngOnInit(): void {
    
    // chama o metodo get da api 
    this.produtoService.getProdutos().subscribe(tmp => {
     this.produtos = tmp.filter(f => f.categoria == 'Lanches') // faz o filtro passando uma variavel temporária iterando sobre produtos
    })


    
  }

}

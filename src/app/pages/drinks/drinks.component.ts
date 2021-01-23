import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/services/produtos.service';
import {Produto} from '../../models/products.model'


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService : ProdutosService ) { }

  ngOnInit(): void {
     
    this.produtoService.getProdutos().subscribe( res => { 
      this.produtos = res.filter(f => f.categoria == 'Bebidas')
      })

  }

}

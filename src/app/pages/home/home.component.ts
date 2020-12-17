import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/services/produtos.service';
import {Produto} from '../../models/products.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: Produto[];
  
  constructor(private produtoService : ProdutosService ) { }

  ngOnInit(): void {

    // const filterProduct = this.produtos.filter(p =>  p.categoria == 'Promoções');
    // this.produtos = filterProduct
    
    this.produtoService.getProdutos().subscribe( res => { 
    this.produtos = res.filter(f => f.categoria == 'Promoções')
    })

    
    
  }

}

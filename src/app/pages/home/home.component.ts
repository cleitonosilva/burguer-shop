import { Component, OnInit } from '@angular/core';

import {products} from '../../data/products-list-source';
import {Produto} from '../../models/products.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: Produto[];
  
  constructor() { }

  ngOnInit(): void {

    const filterProduct = products.filter(p =>  p.categoria == 'Promoções');
    this.produtos = filterProduct
    
  }

}

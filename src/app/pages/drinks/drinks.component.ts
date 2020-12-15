import { Component, OnInit } from '@angular/core';

import {products} from '../../data/products-list-source';
import {Produto} from '../../models/products.model'


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  produtos: Produto[];

  constructor() { }

  ngOnInit(): void {
     
    const filterProduct = products.filter(p =>  p.categoria == 'Bebidas');
    this.produtos = filterProduct

  }

}

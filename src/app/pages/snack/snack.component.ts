import { Component, OnInit } from '@angular/core';

import {products} from '../../data/products-list-source';
import {Produto} from '../../models/products.model'

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {
  produtos: Produto[];

  constructor() { }

  ngOnInit(): void {

    const filterProduct = products.filter(p =>  p.categoria == 'Lanches');
    this.produtos = filterProduct
  }

}

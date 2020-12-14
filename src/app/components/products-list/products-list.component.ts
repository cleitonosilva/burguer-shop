import { Component, OnInit } from '@angular/core';

import {Produto} from '../../models/products.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  produtos: Produto[] = [];

  
  constructor() {
    
   }

  ngOnInit(): void {
    this.produtos = [
      {
      grif: 'La Vosier',
      categoria: 'Promoções',
      produto: 'Hamburguer',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20,
      url:'../../../assets/img/burguerproduct.png',
      },

      {
        grif: 'La Vosier',
        categoria: 'Promoções',
        produto: 'Hamburguer',
        descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        preco: 25,
        url:'../../../assets/img/burguerproduct.png',
      },

        {
          grif: 'La Vosier',
          categoria: 'Promoções',
          produto: 'Hamburguer',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 30,
          url:'../../../assets/img/burguerproduct.png',

        },

          {
            grif: 'La Vosier',
            categoria: 'Promoções',
            produto: 'Hamburguer',
            descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            preco: 30,
            url:'../../../assets/img/burguerproduct.png',
    },

            {
              grif: 'La Vosier',
              categoria: 'Promoções',
              produto: 'Hamburguer',
              descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
              preco: 30,
              url:'../../../assets/img/burguerproduct.png',
    },

              {
                grif: 'La Vosier',
                categoria: 'Promoções',
                produto: 'Hamburguer',
                descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
                preco: 30,
                url:'../../../assets/img/burguerproduct.png',
    },

    ];
  }

}

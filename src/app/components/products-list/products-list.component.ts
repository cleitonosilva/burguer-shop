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


    // ----------bebidas------------

    { 
      grif: 'La Vosier',
      categoria: 'Bebidas',
      produto: 'Cubanaca',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20,
      url: '../../../assets/img/cubanaca.png'
    },

    { 
      grif: 'Carolina Herrera',
      categoria: 'Bebidas',
      produto: 'Amanhecer',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20,
      url: '../../../assets/img/carolina.png'

    },

    { 
      grif: 'Casa do cafe',
      categoria: 'Bebidas',
      produto: 'Cafe com amor',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20,
      url: '../../../assets/img/casacafe.png'

    },

    { 
      grif: 'Doces Supremos',
      categoria: 'Bebidas',
      produto: 'Milk shake',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 25,
      url: '../../../assets/img/milkshake.png'

    },

    { 
      grif: 'Body Fitness',
      categoria: 'Bebidas',
      produto: 'Suco de melancia',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20,
      url: '../../../assets/img/melancia.png'

    },

    { 
      grif: 'Body Fitness',
      categoria: 'Bebidas',
      produto: 'Agua com gas',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20,
      url: '../../../assets/img/agua.png'

    },

    ];
  }

}

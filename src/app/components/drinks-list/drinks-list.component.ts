import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import {Produto} from '../../models/products.model'


@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {

  bebidas: Produto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.bebidas = [
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

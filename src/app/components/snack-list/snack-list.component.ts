import { Component, OnInit } from '@angular/core';
import {Produto} from '../../models/products.model'


@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.scss']
})
export class SnackListComponent implements OnInit {
  lanches : Produto[] = [];

  constructor() { }

  ngOnInit(): void {

  //   this.lanches = [
  //     { 
  //       grif: 'La Vosier',
  //       categoria: 'Lanches',
  //       produto: 'Cubanaca',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 16,
  //       url:'../../../assets/img/lanchecuba.png',
  //     },
    
  //     { 
  //       grif: 'Casa da Batata',
  //       categoria: 'Lanches',
  //       produto: 'Super Kit',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 26,
  //       url:'../../../assets/img/superkit.png',
  //     },

  //     { 
  //       grif: 'Via Expresso',
  //       categoria: 'Lanches',
  //       produto: 'Millenium',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 46,
  //       url:'../../../assets/img/milenium.png',
  //     },
    
  //     { 
  //       grif: 'Lanches artesanais',
  //       categoria: 'Lanches',
  //       produto: 'In Nature',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 29,
  //       url:'../../../assets/img/innature.png',
  //     },

  //     { 
  //       grif: 'Cubanacan',
  //       categoria: 'Lanches',
  //       produto: 'Natchos',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 26,
  //       url:'../../../assets/img/natchos.png',
  //     },

  //     { 
  //       grif: 'Mama mia',
  //       categoria: 'Lanches',
  //       produto: 'Quarteirão',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 46,
  //       url:'../../../assets/img/quarteirao.png',
  //     },
    
  //     { 
  //       grif: 'Latinos Lanches',
  //       categoria: 'Lanches',
  //       produto: 'Presuntinhos',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 16,
  //       url:'../../../assets/img/presuntinhos.png',
  //     },
    

  //     { 
  //       grif: 'Casa da Batata',
  //       categoria: 'Lanches',
  //       produto: 'Super Kit',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 26,
  //       url:'../../../assets/img/superkit2.png',
  //     },

  //     { 
  //       grif: 'Via expresso',
  //       categoria: 'Lanches',
  //       produto: 'Millenium',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 26,
  //       url:'../../../assets/img/milenium2.png',
  //     },

  //     { 
  //       grif: 'Siga bem caminhoneiro',
  //       categoria: 'Lanches',
  //       produto: 'Enguiça Blindado ',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 26,
  //       url:'../../../assets/img/enguica.png',
  //     },

  //     { 
  //       grif: 'Vida Saudavel',
  //       categoria: 'Lanches',
  //       produto: 'Pãozinho a Paulista',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 14,
  //       url:'../../../assets/img/paulista.png',
  //     },

  //     { 
  //       grif: 'Pão de queijo',
  //       categoria: 'Lanches',
  //       produto: 'Expressinho pra viagem',
  //       descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //       preco: 20,
  //       url:'../../../assets/img/expressinho.png',
  //     },
  //   ]
  // }

}
}
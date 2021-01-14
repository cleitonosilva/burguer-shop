import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  valor: number = 1;
  valorTotal: number; 
  valorProduto: number = 8

  constructor() { }

  ngOnInit(): void {
   this.valorTotal= (this.valorProduto * this.valor)
  }

  decrement(){
    if(this.valor > 0){
    this.valor--;
    const total = (this.valorProduto * this.valor) 
    this.valorTotal = total
  
  }
}

  increment(){
    this.valor++;
    const total = (this.valorProduto * this.valor) 
    this.valorTotal = total
  }


}

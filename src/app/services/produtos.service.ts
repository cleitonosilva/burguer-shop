import { Item } from './../models/item';
import { EventEmitter, Injectable, Input } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Produto } from './../models/products.model';
import { BehaviorSubject, Observable} from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  // public item = new Item();

  // public messageSource = new BehaviorSubject(this.item);
  // currentMenssage = this.messageSource.asObservable();

  itemQuantidade : string[]

  constructor(private http: HttpClient) { 

      // const storageValueItem = JSON.parse(String(localStorage.getItem('item')));
      // this.item = storageValueItem;

  }
  private url = "http://localhost:3000/produtos";


  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url); 
  }

  // changeItem(item: Item){
  //   item = this.item
  //   this.messageSource.next(item)
  // }
  

}

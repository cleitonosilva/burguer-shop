import { Item } from './../models/item';
import { EventEmitter, Injectable, Input } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Produto } from './../models/products.model';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  itemQuantidade : string[]

  private emissor$ = new Subject<number>();


  constructor(private http: HttpClient) { 
  }
  private url = "http://localhost:3000/produtos";
  // private url = "http://localhost:3000/products/listar";


  getProdutos(): Observable<Produto[]> {
  return this.http.get<Produto[]>(this.url); 

  }

emitirValor(valor: number) {
  this.emissor$.next(valor)
}

getValor(){
  return this.emissor$.asObservable();
}

}

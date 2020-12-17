import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Produto } from './../models/products.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/produtos";

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url); 
  }
}

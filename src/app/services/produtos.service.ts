import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private localStorage :  LocalStorageService) { }
}

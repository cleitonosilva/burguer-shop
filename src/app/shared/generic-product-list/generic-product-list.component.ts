import { Component, OnInit, Input } from '@angular/core';
import {Produto} from '../../models/products.model'


@Component({
  selector: 'app-generic-product-list',
  templateUrl: './generic-product-list.component.html',
  styleUrls: ['./generic-product-list.component.scss']
})
export class GenericProductListComponent implements OnInit {
  @Input() produtos: Produto[];


  constructor() { }

  
  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/models/item';
import { Register } from 'src/app/models/register';
import { ProdutosService } from 'src/app/services/produtos.service';
import {Produto} from '../../models/products.model'
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
  selector: 'ngbd-modal-content',
  template: `
   
   
   <div class="modal-header" style="background: #E32C2C; color: #FFFFFF" >
    <h4  class="modal-title"> Olá {{name}}!  </h4>
  </div>
  

  <!-- <div *ngIf="!name"  class="modal-header" style="background: #E32C2C; color: #FFFFFF" >
    <h4  class="modal-title"> Olá visitante, faça <a class="modal-title" href="/login">Login</a> ou <a class="modal-title" href="/cadastro">Cadastre-se</a> </h4>
  </div> -->

 
  <div class="modal-body d-flex" >
   <h4>Produto já adicionado!<br> Altere as quantidades de cada item <br> direto no <a class="modal-title" href="/carrinho">Carrinho</a> .</h4>
  </div>  

  

<div class="modal--itens">
  
</div>

  `
})
export class ModalMsg {
  @Input() name : any ;
  

  constructor(public activeModal: NgbActiveModal) {}
}


// ---------------------------------modal Acima ----------------------------------



@Component({
  selector: 'app-generic-product-list',
  templateUrl: './generic-product-list.component.html',
  styleUrls: ['./generic-product-list.component.scss']
})
export class GenericProductListComponent implements OnInit {
  @Input() produtos: Produto[];
  userLog: Register[];
  controle: string = 'Visitante'
  user: any 

  produtoSelecionado: Produto;
  listaDeProdutos : Produto [] = []
  produtosVindoDaPagina: Produto[]
  item: any
  // produtosVindoDaPagina: Produto [];

  constructor(
    public produtosService : ProdutosService,
    private modalService: NgbModal,
    ) { }

  
  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(x  => {
    this.listaDeProdutos = x})
  }
  
  ProdutoSelecionado(produto: any){
    
    const list =  this.listaDeProdutos.find(p => p.produto == produto.value)
    if (list){
      this.produtoSelecionado = list
    }

  }
  
  Adicionar(){
    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;

    if(!this.produtosVindoDaPagina){

      const cart = localStorage['cart'] ? JSON.parse(localStorage['cart']) : [];
    
      cart.push({
        produto: this.produtoSelecionado.produto,
        id: this.produtoSelecionado.id,
        preco: this.produtoSelecionado.preco,
        url: this.produtoSelecionado.url,
        categoria: this.produtoSelecionado.categoria,
        descricao: this.produtoSelecionado.descricao,
        grif: this.produtoSelecionado.grif,
        quantidade: 1

      });
            
      const product = this.produtoSelecionado.produto;
      

      this.open()

      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('product', JSON.stringify(product));
      
      
    
    }
  else {
    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
    this.produtosVindoDaPagina = storageValue;
  
    const lista = this.produtosVindoDaPagina.find(x => (x.id == this.produtoSelecionado.id))

    if(lista?.id == this.produtoSelecionado.id){
      this.openMOdal()
    } 
    else {

      const cart = localStorage['cart'] ? JSON.parse(localStorage['cart']) : [];
    
      cart.push({
        produto: this.produtoSelecionado.produto,
        id: this.produtoSelecionado.id,
        preco: this.produtoSelecionado.preco,
        url: this.produtoSelecionado.url,
        categoria: this.produtoSelecionado.categoria,
        descricao: this.produtoSelecionado.descricao,
        grif: this.produtoSelecionado.grif,
        quantidade: 1
      });
      
      const product = this.produtoSelecionado.produto;
      

      this.open()

      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('product', JSON.stringify(product));
      


    }


  }

  


}
 
  open() {
    
    const modalRef = this.modalService.open(GenericModalComponent);
    
  }


  openMOdal() {

    const storageValueLog = JSON.parse(String(localStorage.getItem('userLog')));
      this.userLog = storageValueLog;

      if(this.userLog){
        for (let item of this.userLog){
          const name = item.nome
          const modalRefLog = this.modalService.open(ModalMsg);

          modalRefLog.componentInstance.name = name;

        }
      } else {

        const modalRefLog = this.modalService.open(ModalMsg);

        modalRefLog.componentInstance.name = "Visitante, faça o login ou cadastre-se";

      }
    
    

  }
}




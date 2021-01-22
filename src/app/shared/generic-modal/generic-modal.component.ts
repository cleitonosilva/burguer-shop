import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/products.model';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/pages/login/auth.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {
  @Input() name: any;
  produtosVindoDaPagina: Produto [];
  userLog: Register[]
  controle: boolean = false;
  product: string;
  urlimage: string;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router,
    private authService: AuthService,
    private produtosService: ProdutosService) { }

  ngOnInit(): void {
    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
      this.produtosVindoDaPagina = storageValue;

      const storageValueLog = JSON.parse(String(localStorage.getItem('userLog')));
      this.userLog = storageValueLog;

      const storageValueProduct = JSON.parse(String(localStorage.getItem('product')));
      this.product = storageValueProduct;
                
      if(this.userLog){
        this.controle = true
      }
      
  }

  continuarComprando(){
    const storageValue = JSON.parse(String(localStorage.getItem('cart')));
      this.produtosVindoDaPagina = storageValue;
      if(this.produtosVindoDaPagina){

          for ( let item of this.produtosVindoDaPagina){
            if ( item.quantidade){
              const soma = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
              this.produtosService.emitirValor(soma);      
              if(soma <= 1){

                window.location.reload();
              }
              localStorage.removeItem('product');
              
            } else {
              const soma = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
              this.produtosService.emitirValor(soma);  
              localStorage.removeItem('product');

            }
          }
      
      }

  }

  irParaCarrinho(){
    this.router.navigate(['/carrinho'])
  }
}

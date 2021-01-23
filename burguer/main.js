(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rpP":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/generic-product-list/generic-product-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalMsg, GenericProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMsg", function() { return ModalMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericProductListComponent", function() { return GenericProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _generic_modal_generic_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generic-modal/generic-modal.component */ "Ysvb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/produtos.service */ "rbjm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GenericProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pre\u00E7o: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericProductListComponent_div_1_Template_button_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.ProdutoSelecionado($event.target); })("click", function GenericProductListComponent_div_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.Adicionar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Adicionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.grif, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.categoria, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.produto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 7, p_r1.preco, "R$"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r1.produto);
} }
class ModalMsg {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
}
ModalMsg.ɵfac = function ModalMsg_Factory(t) { return new (t || ModalMsg)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
ModalMsg.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalMsg, selectors: [["ngbd-modal-content"]], inputs: { name: "name" }, decls: 14, vars: 1, consts: [[1, "modal-header", 2, "background", "#E32C2C", "color", "#FFFFFF"], [1, "modal-title"], [1, "modal-body", "d-flex"], ["href", "/carrinho", 1, "modal-title"], [1, "modal--itens"]], template: function ModalMsg_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Produto j\u00E1 adicionado!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Altere as quantidades de cada item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " direto no ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Carrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ol\u00E1 ", ctx.name, "! ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalMsg, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
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
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
// ---------------------------------modal Acima ----------------------------------
class GenericProductListComponent {
    // produtosVindoDaPagina: Produto [];
    constructor(produtosService, modalService) {
        this.produtosService = produtosService;
        this.modalService = modalService;
        this.controle = 'Visitante';
        this.listaDeProdutos = [];
    }
    ngOnInit() {
        this.produtosService.getProdutos().subscribe(x => {
            this.listaDeProdutos = x;
        });
    }
    ProdutoSelecionado(produto) {
        const list = this.listaDeProdutos.find(p => p.produto == produto.value);
        if (list) {
            this.produtoSelecionado = list;
        }
    }
    Adicionar() {
        const storageValue = JSON.parse(String(localStorage.getItem('cart')));
        this.produtosVindoDaPagina = storageValue;
        if (!this.produtosVindoDaPagina) {
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
            this.open();
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('product', JSON.stringify(product));
        }
        else {
            const storageValue = JSON.parse(String(localStorage.getItem('cart')));
            this.produtosVindoDaPagina = storageValue;
            const lista = this.produtosVindoDaPagina.find(x => (x.id == this.produtoSelecionado.id));
            if ((lista === null || lista === void 0 ? void 0 : lista.id) == this.produtoSelecionado.id) {
                this.openMOdal();
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
                this.open();
                localStorage.setItem('cart', JSON.stringify(cart));
                localStorage.setItem('product', JSON.stringify(product));
            }
        }
    }
    open() {
        const modalRef = this.modalService.open(_generic_modal_generic_modal_component__WEBPACK_IMPORTED_MODULE_1__["GenericModalComponent"]);
    }
    openMOdal() {
        const storageValueLog = JSON.parse(String(localStorage.getItem('userLog')));
        this.userLog = storageValueLog;
        if (this.userLog) {
            for (let item of this.userLog) {
                const name = item.nome;
                const modalRefLog = this.modalService.open(ModalMsg);
                modalRefLog.componentInstance.name = name;
            }
        }
        else {
            const modalRefLog = this.modalService.open(ModalMsg);
            modalRefLog.componentInstance.name = "Visitante, faça o login ou cadastre-se";
        }
    }
}
GenericProductListComponent.ɵfac = function GenericProductListComponent_Factory(t) { return new (t || GenericProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
GenericProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericProductListComponent, selectors: [["app-generic-product-list"]], inputs: { produtos: "produtos" }, decls: 2, vars: 1, consts: [[1, "cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card--img"], [1, "card--img", 3, "src"], [1, "card--body"], [1, "card--box"], [1, "card--title"], [1, "card--type"], [1, "card--product"], [1, "card--description"], [1, "card--cart"], [1, "cart--price"], [1, "price--info"], [1, "cart--purchase"], [1, "cart--btn", 3, "value", "click"]], template: function GenericProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GenericProductListComponent_div_1_Template, 24, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  \n  column-gap: 1.6rem;\n  \n  margin: 16px, 40px;\n  padding-left: 80px;\n  padding-right: 80px;\n  width: 100%;\n  margin-top: 80px;\n  border: none;\n  margin-bottom: 80px;\n}\n@media (max-width: 768px) {\n  .cards[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    \n    column-gap: 1.6rem;\n    \n    margin: 16px, 40px;\n    padding-left: 80px;\n    padding-right: 80px;\n    width: 100%;\n    margin-top: 80px;\n    border: none;\n    margin-bottom: 80px;\n  }\n}\n@media (max-width: 560px) {\n  .cards[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    \n    column-gap: 1.6rem;\n    \n    margin: 16px, 40px;\n    padding-left: 80px;\n    padding-right: 80px;\n    margin-top: 80px;\n    border: none;\n    margin-bottom: 80px;\n  }\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.212);\n  margin-bottom: 50px;\n  height: 95%;\n}\n.cards[_ngcontent-%COMP%]   .card--img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 214px;\n  background-repeat: no-repeat;\n}\n.cards[_ngcontent-%COMP%]   .card--box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media (max-width: 1200px) {\n  .cards[_ngcontent-%COMP%]   .card--box[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media (max-width: 768px) {\n  .cards[_ngcontent-%COMP%]   .card--box[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1.1;\n  }\n}\n@media (max-width: 468px) {\n  .cards[_ngcontent-%COMP%]   .card--box[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n.cards[_ngcontent-%COMP%]   .card--title[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-left: 8px;\n  font-size: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--type[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-right: 8px;\n  font-size: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--product[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 8px;\n  margin-top: 16px;\n}\n@media (max-width: 1200px) {\n  .cards[_ngcontent-%COMP%]   .card--product[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media (max-width: 768px) {\n  .cards[_ngcontent-%COMP%]   .card--product[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1.1;\n  }\n}\n@media (max-width: 468px) {\n  .cards[_ngcontent-%COMP%]   .card--product[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n.cards[_ngcontent-%COMP%]   .card--description[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 7px;\n  margin-top: 16px;\n}\n@media (max-width: 1200px) {\n  .cards[_ngcontent-%COMP%]   .card--description[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media (max-width: 768px) {\n  .cards[_ngcontent-%COMP%]   .card--description[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1.1;\n  }\n}\n@media (max-width: 468px) {\n  .cards[_ngcontent-%COMP%]   .card--description[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n.card--cart[_ngcontent-%COMP%] {\n  height: 64px;\n  margin-left: 8px;\n  margin-right: 7px;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  justify-items: center;\n}\n@media (max-width: 920px) {\n  .card--cart[_ngcontent-%COMP%] {\n    height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-items: center;\n    flex-direction: column;\n  }\n}\n@media (max-width: 560px) {\n  .card--cart[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-items: center;\n    flex-direction: column;\n  }\n}\n.cart--price[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  margin: inherit;\n}\n@media (max-width: 920px) {\n  .cart--price[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: inherit;\n  }\n}\n@media (max-width: 560px) {\n  .cart--price[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n  }\n}\n@media (max-width: 1200px) {\n  .cart--purchase[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    flex-direction: row-reverse;\n  }\n}\n@media (max-width: 768px) {\n  .cart--purchase[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media (max-width: 560px) {\n  .cart--purchase[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n}\n.cart--btn[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 30px;\n  background: #E32C2C;\n  color: #ffff;\n  font-size: 12px;\n  outline: none;\n  border: none;\n}\n@media (max-width: 768px) {\n  .cart--btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 560px) {\n  .cart--btn[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.price--info[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.modal--box[_ngcontent-%COMP%] {\n  background: #E32C2C;\n  color: #ffff;\n}\n.modal--product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #E32C2C;\n  font-size: 18px;\n}\n.modal--msg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 17px;\n  font-weight: bold;\n}\n.modal--itens[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.modal--itens[_ngcontent-%COMP%]   .itens--total[_ngcontent-%COMP%] {\n  color: #E32C2C;\n  font-size: 20px;\n  margin-right: 10px;\n  font-weight: bold;\n}\n.modal--itens[_ngcontent-%COMP%]   .itens--info[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n.modal--box--btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.modal--box--btn[_ngcontent-%COMP%]   .modal--btn[_ngcontent-%COMP%] {\n  height: 40px;\n  outline: none;\n  border: none;\n  background: #0a0a0a9a;\n  border-radius: 10px;\n  color: #ffff;\n}\n.modal--box--btn[_ngcontent-%COMP%]   .modal--btn[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  background: #E32C2C;\n  color: #ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnZW5lcmljLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFHRywrREFBQTtFQUNILGtCQUFBO0VBQW9CLDRDQUFBO0VBQ3BCLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFmSjtJQWdCUSxhQUFBO0lBQ0EscUNBQUE7SUFHRywrREFBQTtJQUNILGtCQUFBO0lBQW9CLDRDQUFBO0lBQ3BCLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQUNOO0FBQ0Y7QUFBTTtFQTlCTjtJQStCUSxhQUFBO0lBQ0EscUNBQUE7SUFHRywrREFBQTtJQUNILGtCQUFBO0lBQW9CLDRDQUFBO0lBQ3BCLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBRU47QUFDRjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRFI7QUFLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUFIUjtBQU9JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFMUjtBQU9RO0VBQ0k7SUFBTyxnQkFBQTtFQUpqQjtBQUNGO0FBS1U7RUFDRTtJQUFPLGNBQUE7RUFGakI7QUFDRjtBQUdVO0VBQ0U7SUFBTyxjQUFBO0VBQWpCO0FBQ0Y7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSFI7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTFI7QUFRSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTlI7QUFRUTtFQUNJO0lBQU8sZ0JBQUE7RUFMakI7QUFDRjtBQU1VO0VBQ0U7SUFBTyxjQUFBO0VBSGpCO0FBQ0Y7QUFJVTtFQUNFO0lBQU8sY0FBQTtFQURqQjtBQUNGO0FBTUk7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFJO0VBQ0U7SUFBTyxnQkFBQTtFQUxYO0FBQ0Y7QUFNSTtFQUNFO0lBQU8sY0FBQTtFQUhYO0FBQ0Y7QUFJSTtFQUNFO0lBQU8sY0FBQTtFQURYO0FBQ0Y7QUFPSTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBTFI7QUFRUTtFQVpKO0lBY1EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtFQU5WO0FBQ0Y7QUFTUTtFQXZCSjtJQXdCUSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7RUFOVjtBQUNGO0FBU0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBTlI7QUFRUTtFQVBKO0lBUVEsV0FBQTtJQUNBLGVBQUE7RUFMVjtBQUNGO0FBT1E7RUFaSjtJQWFRLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQUpWO0FBQ0Y7QUFRUTtFQURKO0lBRUksVUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtFQUpOO0FBQ0Y7QUFNVTtFQVBOO0lBUVEsVUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQUhWO0FBQ0Y7QUFLVTtFQWJOO0lBY1EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQUZWO0FBQ0Y7QUFNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSFI7QUFLUTtFQVRKO0lBVVEsV0FBQTtFQUZWO0FBQ0Y7QUFNUTtFQWZKO0lBaUJRLFVBQUE7RUFKVjtBQUNGO0FBUUk7RUFFQSxlQUFBO0FBTko7QUFZQztFQUVHLG1CQUFBO0VBQ0EsWUFBQTtBQVZKO0FBYUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVZSO0FBYUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVZSO0FBYUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFWUjtBQVlRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVlo7QUFhUTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQVpaO0FBZ0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFiUjtBQWVRO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFiUjtBQWVRO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFkWiIsImZpbGUiOiJnZW5lcmljLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIC8qYWRhcHRhIGUgZGl2aWRlIHByb3BvcmNpb25hbG1lbnRlIGFzIGNvbHVuYXMgZSBvcyBxdWFkcmFkb3MgKi9cbiAgY29sdW1uLWdhcDogMS42cmVtO1xuICAvKiBlc3Bhw6dvIGVudHJlIGFzIGltYWdlbnMgb3Ugb3MgcXVhZHJhZG9zICovXG4gIG1hcmdpbjogMTZweCwgNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIC8qYWRhcHRhIGUgZGl2aWRlIHByb3BvcmNpb25hbG1lbnRlIGFzIGNvbHVuYXMgZSBvcyBxdWFkcmFkb3MgKi9cbiAgICBjb2x1bW4tZ2FwOiAxLjZyZW07XG4gICAgLyogZXNwYcOnbyBlbnRyZSBhcyBpbWFnZW5zIG91IG9zIHF1YWRyYWRvcyAqL1xuICAgIG1hcmdpbjogMTZweCwgNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmNhcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgLyphZGFwdGEgZSBkaXZpZGUgcHJvcG9yY2lvbmFsbWVudGUgYXMgY29sdW5hcyBlIG9zIHF1YWRyYWRvcyAqL1xuICAgIGNvbHVtbi1nYXA6IDEuNnJlbTtcbiAgICAvKiBlc3Bhw6dvIGVudHJlIGFzIGltYWdlbnMgb3Ugb3MgcXVhZHJhZG9zICovXG4gICAgbWFyZ2luOiAxNnB4LCA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIH1cbn1cbi5jYXJkcyAuY2FyZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMTIpO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDk1JTtcbn1cbi5jYXJkcyAuY2FyZC0taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjE0cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY2FyZHMgLmNhcmQtLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmRzIC5jYXJkLS1ib3ggYm9keSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkcyAuY2FyZC0tYm94IGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS4xO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDY4cHgpIHtcbiAgLmNhcmRzIC5jYXJkLS1ib3ggYm9keSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbi5jYXJkcyAuY2FyZC0tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZHMgLmNhcmQtLXR5cGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNhcmRzIC5jYXJkLS1wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2FyZHMgLmNhcmQtLXByb2R1Y3QgYm9keSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkcyAuY2FyZC0tcHJvZHVjdCBib2R5IHtcbiAgICBmb250LXNpemU6IDEuMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2OHB4KSB7XG4gIC5jYXJkcyAuY2FyZC0tcHJvZHVjdCBib2R5IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuLmNhcmRzIC5jYXJkLS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2FyZHMgLmNhcmQtLWRlc2NyaXB0aW9uIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZHMgLmNhcmQtLWRlc2NyaXB0aW9uIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS4xO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDY4cHgpIHtcbiAgLmNhcmRzIC5jYXJkLS1kZXNjcmlwdGlvbiBib2R5IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuXG4uY2FyZC0tY2FydCB7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC5jYXJkLS1jYXJ0IHtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmNhcmQtLWNhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uY2FydC0tcHJpY2Uge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogaW5oZXJpdDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAuY2FydC0tcHJpY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogaW5oZXJpdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5jYXJ0LS1wcmljZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJ0LS1wdXJjaGFzZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LS1wdXJjaGFzZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuY2FydC0tcHVyY2hhc2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uY2FydC0tYnRuIHtcbiAgd2lkdGg6IDkycHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI0UzMkMyQztcbiAgY29sb3I6ICNmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FydC0tYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5jYXJ0LS1idG4ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLnByaWNlLS1pbmZvIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubW9kYWwtLWJveCB7XG4gIGJhY2tncm91bmQ6ICNFMzJDMkM7XG4gIGNvbG9yOiAjZmZmZjtcbn1cblxuLm1vZGFsLS1wcm9kdWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sb3I6ICNFMzJDMkM7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1vZGFsLS1tc2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW9kYWwtLWl0ZW5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tb2RhbC0taXRlbnMgLml0ZW5zLS10b3RhbCB7XG4gIGNvbG9yOiAjRTMyQzJDO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9kYWwtLWl0ZW5zIC5pdGVucy0taW5mbyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb2RhbC0tYm94LS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubW9kYWwtLWJveC0tYnRuIC5tb2RhbC0tYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwYTBhMGE5YTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmZmO1xufVxuLm1vZGFsLS1ib3gtLWJ0biAubW9kYWwtLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNFMzJDMkM7XG4gIGNvbG9yOiAjZmZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generic-product-list',
                templateUrl: './generic-product-list.component.html',
                styleUrls: ['./generic-product-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["ProdutosService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, { produtos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "+uQb":
/*!*****************************************************************!*\
  !*** ./src/app/components/drinks-list/drinks-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: DrinksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksListComponent", function() { return DrinksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/generic-product-list/generic-product-list.component */ "+rpP");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class DrinksListComponent {
    constructor() {
        this.bebidas = [];
    }
    ngOnInit() {
        // this.bebidas = [
        // { 
        //   grif: 'La Vosier',
        //   categoria: 'Bebidas',
        //   produto: 'Cubanaca',
        //   descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        //   preco: 20,
        //   url: '../../../assets/img/cubanaca.png'
        // },
        // { 
        //   grif: 'Carolina Herrera',
        //   categoria: 'Bebidas',
        //   produto: 'Amanhecer',
        //   descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        //   preco: 20,
        //   url: '../../../assets/img/carolina.png'
        // },
        // { 
        //   grif: 'Casa do cafe',
        //   categoria: 'Bebidas',
        //   produto: 'Cafe com amor',
        //   descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        //   preco: 20,
        //   url: '../../../assets/img/casacafe.png'
        // },
        // { 
        //   grif: 'Doces Supremos',
        //   categoria: 'Bebidas',
        //   produto: 'Milk shake',
        //   descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        //   preco: 25,
        //   url: '../../../assets/img/milkshake.png'
        // },
        // { 
        //   grif: 'Body Fitness',
        //   categoria: 'Bebidas',
        //   produto: 'Suco de melancia',
        //   descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        //   preco: 20,
        //   url: '../../../assets/img/melancia.png'
        // },
        // { 
        //   grif: 'Body Fitness',
        //   categoria: 'Bebidas',
        //   produto: 'Agua com gas',
        //   descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        //   preco: 20,
        //   url: '../../../assets/img/agua.png'
        // },
        // ];
    }
}
DrinksListComponent.ɵfac = function DrinksListComponent_Factory(t) { return new (t || DrinksListComponent)(); };
DrinksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinksListComponent, selectors: [["app-drinks-list"]], decls: 2, vars: 1, consts: [[3, "produtos"]], template: function DrinksListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-generic-product-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("produtos", ctx.bebidas);
    } }, directives: [_shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_1__["GenericProductListComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["@charset \"UTF-8\";\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  \n  column-gap: 1.6rem;\n  \n  margin: 16px, 40px;\n  padding-left: 80px;\n  padding-right: 80px;\n  width: 100%;\n  height: 446px;\n  margin-top: 80px;\n  border: none;\n  margin-bottom: 80px;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.212);\n}\n.cards[_ngcontent-%COMP%]   .card--img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 214px;\n  background-repeat: no-repeat;\n}\n.cards[_ngcontent-%COMP%]   .card--box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.cards[_ngcontent-%COMP%]   .card--title[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-left: 8px;\n  font-size: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--type[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-right: 8px;\n  font-size: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--product[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 8px;\n  margin-top: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--description[_ngcontent-%COMP%] {\n  width: 355px;\n  height: 64px;\n  margin-left: 8px;\n  margin-right: 7px;\n  margin-top: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--cart[_ngcontent-%COMP%] {\n  width: 355px;\n  height: 64px;\n  margin-left: 8px;\n  margin-right: 7px;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n}\n.cards[_ngcontent-%COMP%]   .cart--price[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  margin-top: 12px;\n}\n.cards[_ngcontent-%COMP%]   .cart--purchase[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.cards[_ngcontent-%COMP%]   .cart--btn[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 30px;\n  background: #E32C2C;\n  color: #ffff;\n  font-size: 12px;\n  outline: none;\n  border: none;\n}\n.price--info[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkcmlua3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFHRywrREFBQTtFQUNILGtCQUFBO0VBQW9CLDRDQUFBO0VBQ3BCLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBRFI7QUFLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUFIUjtBQU9JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFMUjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQUjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFUUjtBQVlJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQVlJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQVlJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBVlI7QUFhSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBWFI7QUFjSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFaUjtBQWNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFaUjtBQWdCSTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWJKIiwiZmlsZSI6ImRyaW5rcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgLyphZGFwdGEgZSBkaXZpZGUgcHJvcG9yY2lvbmFsbWVudGUgYXMgY29sdW5hcyBlIG9zIHF1YWRyYWRvcyAqL1xuICBjb2x1bW4tZ2FwOiAxLjZyZW07XG4gIC8qIGVzcGHDp28gZW50cmUgYXMgaW1hZ2VucyBvdSBvcyBxdWFkcmFkb3MgKi9cbiAgbWFyZ2luOiAxNnB4LCA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0NnB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG4uY2FyZHMgLmNhcmQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcbn1cbi5jYXJkcyAuY2FyZC0taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjE0cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY2FyZHMgLmNhcmQtLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYXJkcyAuY2FyZC0tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZHMgLmNhcmQtLXR5cGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNhcmRzIC5jYXJkLS1wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmNhcmRzIC5jYXJkLS1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAzNTVweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jYXJkcyAuY2FyZC0tY2FydCB7XG4gIHdpZHRoOiAzNTVweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkcyAuY2FydC0tcHJpY2Uge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uY2FyZHMgLmNhcnQtLXB1cmNoYXNlIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmNhcmRzIC5jYXJ0LS1idG4ge1xuICB3aWR0aDogOTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjRTMyQzJDO1xuICBjb2xvcjogI2ZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJpY2UtLWluZm8ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrinksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drinks-list',
                templateUrl: './drinks-list.component.html',
                styleUrls: ['./drinks-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cleit\Desktop\burguer_Design\burguer\src\main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/login/auth.service */ "c5HJ");
/* harmony import */ var src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/produtos.service */ "rbjm");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function MenuComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.valor, " ");
} }
const _c0 = function () { return ["/cadastro"]; };
function MenuComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/bebidas"]; };
const _c2 = function () { return ["/lanches"]; };
const _c3 = function () { return ["/promocoes"]; };
const _c4 = function () { return ["/carrinho"]; };
class MenuComponent {
    constructor(authService, produtosService) {
        this.authService = authService;
        this.produtosService = produtosService;
        this.itemQuantidade = 0;
        this.itemControle = false;
        this.authUser = false;
        this.numeroCarrinho = 0;
    }
    ngOnInit() {
        // this.produtosService.currentMenssage.subscribe(users => console.log(users) ); ;
        this.produtosService.getValor().subscribe(novoValor => this.valor = novoValor);
        const storageValue = JSON.parse(String(localStorage.getItem('cart')));
        this.produtosVindoDaPagina = storageValue;
        if (this.produtosVindoDaPagina) {
            if (this.produtosVindoDaPagina.length > 0) {
                this.itemControle = true;
                for (let item of this.produtosVindoDaPagina) {
                    const soma = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
                    this.produtosService.emitirValor(soma);
                }
            }
        }
        ;
        // console.log(this.produtosVindoDaPagina);
        // const somaDosValores = this.produtosVindoDaPagina.reduce( (a,b) => a + b.quantidade, 0 );
        // this.produtosService.emitirValor(somaDosValores);      
        this.authUser = this.authService.usuarioEstaAutenticado();
    }
    ;
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { RecebeItens: "RecebeItens" }, decls: 19, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "nav--bg"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "nav--title"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "justify-content-end"], ["type", "button", "routerLinkActive", "router-link-active", 1, "btn", "me-2", "nav--item", 3, "routerLink"], ["type", "button", 1, "btn", "me-2", "nav--item"], ["class", "nav--p", 4, "ngIf"], ["src", "../../assets/img/cesta.svg", "alt", ""], ["class", "btn  me-2 nav--item", "type", "button", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], [1, "nav--p"], ["src", "../../assets/img/user.svg", "alt", ""]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fast Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bebidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lanches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Promo\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MenuComponent_p_16_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuComponent_button_18_Template, 2, 2, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemControle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authUser);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".nav--bg[_ngcontent-%COMP%] {\n  background-color: #020202a6;\n}\n\n.nav--item[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 19px;\n  background: transparent;\n  height: 50%;\n}\n\n.nav--item[_ngcontent-%COMP%]:hover {\n  background: #E32C2C;\n}\n\n.nav--item[_ngcontent-%COMP%]:hover:hover   .nav--p[_ngcontent-%COMP%] {\n  color: #ffff;\n}\n\n.nav--item[_ngcontent-%COMP%]   .nav--title[_ngcontent-%COMP%] {\n  background: none;\n  font-size: 19px;\n  color: #ffff;\n}\n\n.nav--item[_ngcontent-%COMP%]   .nav--cart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: inherit;\n}\n\n.nav--item[_ngcontent-%COMP%]   .nav--p[_ngcontent-%COMP%] {\n  height: 1px;\n  color: #E32C2C;\n  display: flex;\n  justify-content: flex-end;\n  font-weight: bold;\n}\n\n.nav--item[_ngcontent-%COMP%]   .nav--p[_ngcontent-%COMP%]:hover {\n  color: #ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0k7RUFDSSxtQkFBQTtBQURSOztBQUdJO0VBQ0ksWUFBQTtBQURSOztBQUtBO0VBQ1EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUhSOztBQU9JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBTFI7O0FBV0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBVFI7O0FBV1E7RUFDSSxZQUFBO0FBVFoiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAyMDJhNjtcclxuICAgICAgICBcclxufVxyXG5cclxuXHJcbi5uYXYtLWl0ZW0ge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNFMzJDMkM7XHJcbiAgICBcclxuICAgICY6aG92ZXIgLm5hdi0tcCB7XHJcbiAgICAgICAgY29sb3I6I2ZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG4ubmF2LS10aXRsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAubmF2LS1jYXJ0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XHJcbiAgICAgICBcclxuXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAubmF2LS1we1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGNvbG9yOiAjRTMyQzJDIDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: src_app_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"] }]; }, { RecebeItens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "1CY9":
/*!************************************************!*\
  !*** ./src/app/pages/snack/snack.component.ts ***!
  \************************************************/
/*! exports provided: SnackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackComponent", function() { return SnackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/produtos.service */ "rbjm");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/generic-product-list/generic-product-list.component */ "+rpP");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");






class SnackComponent {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    ngOnInit() {
        // chama o metodo get da api 
        this.produtoService.getProdutos().subscribe(tmp => {
            this.produtos = tmp.filter(f => f.categoria == 'Lanches'); // faz o filtro passando uma variavel temporária iterando sobre produtos
        });
    }
}
SnackComponent.ɵfac = function SnackComponent_Factory(t) { return new (t || SnackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"])); };
SnackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackComponent, selectors: [["app-snack"]], decls: 6, vars: 1, consts: [[1, "drinks"], [1, "dinks--title"], [3, "produtos"]], template: function SnackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lanches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-generic-product-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("produtos", ctx.produtos);
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_3__["GenericProductListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".drinks[_ngcontent-%COMP%]   .dinks--title[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 75px;\n  color: #E32C2C;\n  font-size: 64px;\n  margin-top: 107px;\n  margin-right: 135px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoic25hY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJpbmtzIHtcclxuXHJcbiAgICAuZGlua3MtLXRpdGxlIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGNvbG9yOiAjRTMyQzJDO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEzNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snack',
                templateUrl: './snack.component.html',
                styleUrls: ['./snack.component.scss']
            }]
    }], function () { return [{ type: src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"] }]; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/produtos.service */ "rbjm");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/generic-product-list/generic-product-list.component */ "+rpP");
/* harmony import */ var _components_promotions_home_promotions_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/promotions-home/promotions-home.component */ "8474");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");







class HomeComponent {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    ngOnInit() {
        // const filterProduct = this.produtos.filter(p =>  p.categoria == 'Promoções');
        // this.produtos = filterProduct
        this.produtoService.getProdutos().subscribe(res => {
            this.produtos = res.filter(f => f.categoria == 'Promoções');
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 1, consts: [[1, "home--img"], [1, "home--bg"], [1, "home--box"], [1, "home--title"], [1, "home--btn"], [3, "produtos"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Que tal matar a sua fome agora?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eu Quero!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-generic-product-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-promotions-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("produtos", ctx.produtos);
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_3__["GenericProductListComponent"], _components_promotions_home_promotions_home_component__WEBPACK_IMPORTED_MODULE_4__["PromotionsHomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".home--bg[_ngcontent-%COMP%] {\n  background: #020202a6;\n  width: 100%;\n  height: 100%;\n}\n\n.home--img[_ngcontent-%COMP%] {\n  background: url('imghome.png');\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  height: 680px;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n}\n\n.home--img[_ngcontent-%COMP%]   .home--box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10%;\n  color: #ffffff;\n}\n\n.home--img[_ngcontent-%COMP%]   .home--title[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\n\n.home--img[_ngcontent-%COMP%]   .home--btn[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 68px;\n  background: #e32c2c;\n  color: #ffffff;\n  border: none;\n  outline: none;\n  margin-top: 53px;\n  font-size: 24px;\n}\n\nbody[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQyxhQUFBO0VBQ0Qsc0JBQUE7QUFBRjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRkYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLS1iZyB7XHJcbiAgYmFja2dyb3VuZDogIzAyMDIwMmE2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBcclxufVxyXG5cclxuLmhvbWUtLWltZyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWdob21lLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDY4MHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmhvbWUtLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICB9XHJcbiAgLmhvbWUtLWJ0biB7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTMyYzJjO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"] }]; }, null); })();


/***/ }),

/***/ "1URB":
/*!***************************************************************!*\
  !*** ./src/app/components/snack-list/snack-list.component.ts ***!
  \***************************************************************/
/*! exports provided: SnackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackListComponent", function() { return SnackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/generic-product-list/generic-product-list.component */ "+rpP");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class SnackListComponent {
    constructor() {
        this.lanches = [];
    }
    ngOnInit() {
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
SnackListComponent.ɵfac = function SnackListComponent_Factory(t) { return new (t || SnackListComponent)(); };
SnackListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackListComponent, selectors: [["app-snack-list"]], decls: 2, vars: 1, consts: [[3, "produtos"]], template: function SnackListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-generic-product-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("produtos", ctx.lanches);
    } }, directives: [_shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_1__["GenericProductListComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFjay1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snack-list',
                templateUrl: './snack-list.component.html',
                styleUrls: ['./snack-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "2zrN":
/*!*********************************************************************!*\
  !*** ./src/app/components/products-list/products-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/generic-product-list/generic-product-list.component */ "+rpP");



class ProductsListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(); };
ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["app-products-list"]], decls: 1, vars: 0, template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-generic-product-list");
    } }, directives: [_shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_1__["GenericProductListComponent"]], styles: ["@charset \"UTF-8\";\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  \n  column-gap: 1.6rem;\n  \n  margin: 16px, 40px;\n  padding-left: 80px;\n  padding-right: 80px;\n  width: 100%;\n  margin-top: 80px;\n  border: none;\n  margin-bottom: 80px;\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.212);\n}\n.cards[_ngcontent-%COMP%]   .card--img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 214px;\n  background-repeat: no-repeat;\n}\n.cards[_ngcontent-%COMP%]   .card--box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.cards[_ngcontent-%COMP%]   .card--title[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-left: 8px;\n  font-size: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--type[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-right: 8px;\n  font-size: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--product[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 8px;\n  margin-top: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--description[_ngcontent-%COMP%] {\n  width: 355px;\n  height: 64px;\n  margin-left: 8px;\n  margin-right: 7px;\n  margin-top: 16px;\n}\n.cards[_ngcontent-%COMP%]   .card--cart[_ngcontent-%COMP%] {\n  width: 355px;\n  height: 64px;\n  margin-left: 8px;\n  margin-right: 7px;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n}\n.cards[_ngcontent-%COMP%]   .cart--price[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  margin-top: 12px;\n}\n.cards[_ngcontent-%COMP%]   .cart--purchase[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.cards[_ngcontent-%COMP%]   .cart--btn[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 30px;\n  background: #E32C2C;\n  color: #ffff;\n  font-size: 12px;\n  outline: none;\n  border: none;\n}\n.price--info[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUdHLCtEQUFBO0VBQ0gsa0JBQUE7RUFBb0IsNENBQUE7RUFDcEIsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQURSO0FBS0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBSFI7QUFPSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTFI7QUFTSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUFI7QUFXSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVFI7QUFZSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVlI7QUFZSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVlI7QUFZSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQVZSO0FBYUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVhSO0FBY0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBWlI7QUFjSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBWlI7QUFnQkk7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFiSiIsImZpbGUiOiJwcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgLyphZGFwdGEgZSBkaXZpZGUgcHJvcG9yY2lvbmFsbWVudGUgYXMgY29sdW5hcyBlIG9zIHF1YWRyYWRvcyAqL1xuICBjb2x1bW4tZ2FwOiAxLjZyZW07XG4gIC8qIGVzcGHDp28gZW50cmUgYXMgaW1hZ2VucyBvdSBvcyBxdWFkcmFkb3MgKi9cbiAgbWFyZ2luOiAxNnB4LCA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG4uY2FyZHMgLmNhcmQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjEyKTtcbn1cbi5jYXJkcyAuY2FyZC0taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjE0cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY2FyZHMgLmNhcmQtLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYXJkcyAuY2FyZC0tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZHMgLmNhcmQtLXR5cGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNhcmRzIC5jYXJkLS1wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmNhcmRzIC5jYXJkLS1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAzNTVweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jYXJkcyAuY2FyZC0tY2FydCB7XG4gIHdpZHRoOiAzNTVweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkcyAuY2FydC0tcHJpY2Uge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uY2FyZHMgLmNhcnQtLXB1cmNoYXNlIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmNhcmRzIC5jYXJ0LS1idG4ge1xuICB3aWR0aDogOTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjRTMyQzJDO1xuICBjb2xvcjogI2ZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJpY2UtLWluZm8ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products-list',
                templateUrl: './products-list.component.html',
                styleUrls: ['./products-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8474":
/*!*************************************************************************!*\
  !*** ./src/app/components/promotions-home/promotions-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: PromotionsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsHomeComponent", function() { return PromotionsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PromotionsHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
PromotionsHomeComponent.ɵfac = function PromotionsHomeComponent_Factory(t) { return new (t || PromotionsHomeComponent)(); };
PromotionsHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromotionsHomeComponent, selectors: [["app-promotions-home"]], decls: 0, vars: 0, template: function PromotionsHomeComponent_Template(rf, ctx) { }, styles: ["@charset \"UTF-8\";\n.promotion--section[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  margin-bottom: 80px;\n}\n.promotion--section[_ngcontent-%COMP%]   .promotion--title[_ngcontent-%COMP%] {\n  margin-left: 130px;\n  margin-top: 18px;\n  width: 80%;\n  height: 113px;\n  font-size: 96px;\n  color: #ffff;\n}\n.promotion--section[_ngcontent-%COMP%]   .promotion--subtitle[_ngcontent-%COMP%] {\n  margin-top: 196px;\n  font-size: 72px;\n  color: #ffff;\n  display: flex;\n  flex-direction: row-reverse;\n  margin-right: 214px;\n  line-height: 84, 38px;\n  font-weight: bold;\n}\n.promotion--section[_ngcontent-%COMP%]   .promotion--card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  \n  column-gap: 7rem;\n  \n  margin: 16px, 40px;\n  padding-left: 80px;\n  padding-right: 80px;\n  width: 266px;\n  height: 347px;\n  margin-top: 120px;\n  border: none;\n}\n@media (max-width: 920px) {\n  .promotion--section[_ngcontent-%COMP%]   .promotion--card[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    \n    column-gap: 7rem;\n    \n    margin: 16px, 40px;\n    padding-left: 80px;\n    padding-right: 80px;\n    width: 266px;\n    height: 347px;\n    margin-top: 120px;\n    border: none;\n  }\n}\n@media (max-width: 660px) {\n  .promotion--section[_ngcontent-%COMP%]   .promotion--card[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    \n    column-gap: 7rem;\n    \n    margin: 16px, 40px;\n    padding-left: 80px;\n    padding-right: 80px;\n    width: 266px;\n    height: 347px;\n    margin-top: 120px;\n    border: none;\n  }\n}\n.promotion--section[_ngcontent-%COMP%]   .promotion--img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 266px;\n  margin-bottom: 57px;\n}\n.promotion--section[_ngcontent-%COMP%]   .promotion--description[_ngcontent-%COMP%] {\n  width: 217px;\n  height: 68px;\n  font-size: 12px;\n  color: #FF8515;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9tb3Rpb25zLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBRUEsNEJBQUE7RUFDQSxtQkFBQTtBQUNBO0FBRUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFEO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFLQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUdHLCtEQUFBO0VBQ0gsZ0JBQUE7RUFBa0IsNENBQUE7RUFDbEIsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JO0VBZko7SUFnQlEsYUFBQTtJQUNKLHFDQUFBO0lBR0csK0RBQUE7SUFDSCxnQkFBQTtJQUFrQiw0Q0FBQTtJQUNsQixrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQUpGO0FBQ0Y7QUFNSTtFQS9CSjtJQWdDUSxhQUFBO0lBQ0EscUNBQUE7SUFHRywrREFBQTtJQUNILGdCQUFBO0lBQWtCLDRDQUFBO0lBQ2xCLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBSk47QUFDRjtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBKO0FBVUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFSSiIsImZpbGUiOiJwcm9tb3Rpb25zLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvbW90aW9uLS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi5wcm9tb3Rpb24tLXNlY3Rpb24gLnByb21vdGlvbi0tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTEzcHg7XG4gIGZvbnQtc2l6ZTogOTZweDtcbiAgY29sb3I6ICNmZmZmO1xufVxuLnByb21vdGlvbi0tc2VjdGlvbiAucHJvbW90aW9uLS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE5NnB4O1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiAjZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBtYXJnaW4tcmlnaHQ6IDIxNHB4O1xuICBsaW5lLWhlaWdodDogODQsIDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb21vdGlvbi0tc2VjdGlvbiAucHJvbW90aW9uLS1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgLyphZGFwdGEgZSBkaXZpZGUgcHJvcG9yY2lvbmFsbWVudGUgYXMgY29sdW5hcyBlIG9zIHF1YWRyYWRvcyAqL1xuICBjb2x1bW4tZ2FwOiA3cmVtO1xuICAvKiBlc3Bhw6dvIGVudHJlIGFzIGltYWdlbnMgb3Ugb3MgcXVhZHJhZG9zICovXG4gIG1hcmdpbjogMTZweCwgNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICB3aWR0aDogMjY2cHg7XG4gIGhlaWdodDogMzQ3cHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgLnByb21vdGlvbi0tc2VjdGlvbiAucHJvbW90aW9uLS1jYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgLyphZGFwdGEgZSBkaXZpZGUgcHJvcG9yY2lvbmFsbWVudGUgYXMgY29sdW5hcyBlIG9zIHF1YWRyYWRvcyAqL1xuICAgIGNvbHVtbi1nYXA6IDdyZW07XG4gICAgLyogZXNwYcOnbyBlbnRyZSBhcyBpbWFnZW5zIG91IG9zIHF1YWRyYWRvcyAqL1xuICAgIG1hcmdpbjogMTZweCwgNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICB3aWR0aDogMjY2cHg7XG4gICAgaGVpZ2h0OiAzNDdweDtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAucHJvbW90aW9uLS1zZWN0aW9uIC5wcm9tb3Rpb24tLWNhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICAvKmFkYXB0YSBlIGRpdmlkZSBwcm9wb3JjaW9uYWxtZW50ZSBhcyBjb2x1bmFzIGUgb3MgcXVhZHJhZG9zICovXG4gICAgY29sdW1uLWdhcDogN3JlbTtcbiAgICAvKiBlc3Bhw6dvIGVudHJlIGFzIGltYWdlbnMgb3Ugb3MgcXVhZHJhZG9zICovXG4gICAgbWFyZ2luOiAxNnB4LCA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAyNjZweDtcbiAgICBoZWlnaHQ6IDM0N3B4O1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuLnByb21vdGlvbi0tc2VjdGlvbiAucHJvbW90aW9uLS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjZweDtcbiAgbWFyZ2luLWJvdHRvbTogNTdweDtcbn1cbi5wcm9tb3Rpb24tLXNlY3Rpb24gLnByb21vdGlvbi0tZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMjE3cHg7XG4gIGhlaWdodDogNjhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGODUxNTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromotionsHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promotions-home',
                templateUrl: './promotions-home.component.html',
                styleUrls: ['./promotions-home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "2hxB");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "c5HJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.usuario = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ngOnInit() {
    }
    fazerLogin() {
        // console.log(this.usuario)
        this.authService.fazerLogin(this.usuario);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 14, vars: 2, consts: [[1, "login"], [1, "login--title"], [1, "login--box"], [1, "login--wrapper"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.usuario.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Senha:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.usuario.senha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.fazerLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.senha);
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".login[_ngcontent-%COMP%]   .login--title[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 75px;\n  color: #E32C2C;\n  font-size: 64px;\n  margin-top: 107px;\n  margin-right: 135px;\n}\n.login[_ngcontent-%COMP%]   .login--box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n}\n.login[_ngcontent-%COMP%]   .login--wrapper[_ngcontent-%COMP%] {\n  width: 670px;\n  height: 271px;\n  display: flex;\n  flex-direction: column;\n}\n.login[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #E32C2C;\n  color: #ffff;\n  margin-top: 20px;\n  width: 50%;\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFJQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFMSjtBQVNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFQSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XHJcblxyXG4gICAgLmxvZ2luLS10aXRsZSB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBjb2xvcjogI0UzMkMyQztcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMzVweDtcclxuICAgIH1cclxuICAgIFxyXG4ubG9naW4tLWJveHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbi5sb2dpbi0td3JhcHBlcntcclxuICAgIHdpZHRoOiA2NzBweDtcclxuICAgIGhlaWdodDogMjcxcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG5cclxuICAgIH1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQ6I0UzMkMyQztcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "footer--body"], [1, "footer--social"], [1, "social--title"], [1, "social--img"], ["src", "../../assets/img/Group.svg", "alt", "", 1, "social--box"], ["src", "../../assets/img/Group (1).svg", "alt", "", 1, "social--box"], ["src", "../../assets/img/Group (2).svg", "alt", "", 1, "social--box"], [1, "newletter--footer"], [1, "newletter--title"], [1, "input-group", "mb-3"], ["type", "text", 1, "form-control"], ["type", "button", 1, "btn", "newletter--btn"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Redes Sociais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NewLetter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer--body[_ngcontent-%COMP%] {\n  background: #525252;\n  margin-top: 60px;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 80px;\n}\n@media (max-width: 460px) {\n  .footer--body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-items: center;\n    align-items: center;\n    justify-content: space-around;\n  }\n}\n@media (max-width: 920px) {\n  .footer--body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n  }\n}\n.footer--body[_ngcontent-%COMP%]   .social--title[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 48px;\n  width: 296px;\n  height: 56px;\n}\n.footer--body[_ngcontent-%COMP%]   .social--img[_ngcontent-%COMP%] {\n  width: 296px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  margin-left: 15px !important;\n}\n@media (max-width: 460px) {\n  .footer--body[_ngcontent-%COMP%]   .newletter--footer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media (max-width: 920px) {\n  .footer--body[_ngcontent-%COMP%]   .newletter--footer[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.footer--body[_ngcontent-%COMP%]   .newletter--title[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 48px;\n  width: 296px;\n  height: 56px;\n}\n.footer--body[_ngcontent-%COMP%]   .newletter--btn[_ngcontent-%COMP%] {\n  background: #E32C2C;\n  color: #ffff;\n  margin-left: 21px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBUko7SUFTUSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUFDTjtBQUNGO0FBQ0k7RUFoQko7SUFpQlEsYUFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQUVOO0FBQ0Y7QUFLQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjtBQU1JO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFJQSw0QkFBQTtBQVBKO0FBV0k7RUFESjtJQUVRLFVBQUE7RUFSTjtBQUNGO0FBVUk7RUFMSjtJQU1RLFVBQUE7RUFQTjtBQUNGO0FBV0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVEo7QUFZQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBVkoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci0tYm9keSB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICM1MjUyNTI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4uc29jaWFsLS10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBmb250LXNpemU6NDhweDtcclxuICAgIHdpZHRoOiAyOTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxufVxyXG5cclxuICAgIC5zb2NpYWwtLWltZyB7XHJcbiAgICB3aWR0aDogMjk2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXHJcbiAgICAgIDMsXHJcbiAgICAgIDFmclxyXG4gICAgKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4ubmV3bGV0dGVyLS1mb290ZXIge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xyXG4gICAgICAgIHdpZHRoOjgwJTtcclxuICAgIH1cclxuICAgIFxyXG59IFxyXG5cclxuLm5ld2xldHRlci0tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgZm9udC1zaXplOjQ4cHg7XHJcbiAgICB3aWR0aDogMjk2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuXHJcbi5uZXdsZXR0ZXItLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTMyQzJDO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "O1Ud":
/*!***************************************!*\
  !*** ./src/app/guards/auth-guards.ts ***!
  \***************************************/
/*! exports provided: AuthGuards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuards", function() { return AuthGuards; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/login/auth.service */ "c5HJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuards {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(router, state) {
        if (this.authService.usuarioEstaAutenticado()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuards.ɵfac = function AuthGuards_Factory(t) { return new (t || AuthGuards)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuards.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuards, factory: AuthGuards.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuards, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'burguer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WV2f":
/*!**************************************************!*\
  !*** ./src/app/pages/drinks/drinks.component.ts ***!
  \**************************************************/
/*! exports provided: DrinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksComponent", function() { return DrinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/produtos.service */ "rbjm");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/generic-product-list/generic-product-list.component */ "+rpP");





class DrinksComponent {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    ngOnInit() {
        this.produtoService.getProdutos().subscribe(res => {
            this.produtos = res.filter(f => f.categoria == 'Bebidas');
        });
    }
}
DrinksComponent.ɵfac = function DrinksComponent_Factory(t) { return new (t || DrinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"])); };
DrinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrinksComponent, selectors: [["app-drinks"]], decls: 5, vars: 1, consts: [[1, "drinks"], [1, "dinks--title"], [3, "produtos"]], template: function DrinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bebidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-generic-product-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("produtos", ctx.produtos);
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_3__["GenericProductListComponent"]], styles: [".drinks[_ngcontent-%COMP%]   .dinks--title[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 75px;\n  color: #E32C2C;\n  font-size: 64px;\n  margin-top: 107px;\n  margin-right: 135px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkcmlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURBIiwiZmlsZSI6ImRyaW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmlua3Mge1xyXG5cclxuLmRpbmtzLS10aXRsZSB7XHJcbndpZHRoOiAyMzBweDtcclxuaGVpZ2h0OiA3NXB4O1xyXG5jb2xvcjogI0UzMkMyQztcclxuZm9udC1zaXplOiA2NHB4O1xyXG5tYXJnaW4tdG9wOiAxMDdweDtcclxubWFyZ2luLXJpZ2h0OiAxMzVweDtcclxufVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drinks',
                templateUrl: './drinks.component.html',
                styleUrls: ['./drinks.component.scss']
            }]
    }], function () { return [{ type: src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"] }]; }, null); })();


/***/ }),

/***/ "Ysvb":
/*!*****************************************************************!*\
  !*** ./src/app/shared/generic-modal/generic-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: GenericModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericModalComponent", function() { return GenericModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/login/auth.service */ "c5HJ");
/* harmony import */ var src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/produtos.service */ "rbjm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function GenericModalComponent_ng_template_0_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.nome, " ");
} }
function GenericModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GenericModalComponent_ng_template_0_h4_1_Template, 2, 1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userLog);
} }
function GenericModalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ol\u00E1 visitante, fa\u00E7a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ou ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cadastre-se");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GenericModalComponent {
    constructor(modalService, activeModal, router, authService, produtosService) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.router = router;
        this.authService = authService;
        this.produtosService = produtosService;
        this.controle = false;
    }
    ngOnInit() {
        const storageValue = JSON.parse(String(localStorage.getItem('cart')));
        this.produtosVindoDaPagina = storageValue;
        const storageValueLog = JSON.parse(String(localStorage.getItem('userLog')));
        this.userLog = storageValueLog;
        const storageValueProduct = JSON.parse(String(localStorage.getItem('product')));
        this.product = storageValueProduct;
        if (this.userLog) {
            this.controle = true;
        }
    }
    continuarComprando() {
        const storageValue = JSON.parse(String(localStorage.getItem('cart')));
        this.produtosVindoDaPagina = storageValue;
        if (this.produtosVindoDaPagina) {
            for (let item of this.produtosVindoDaPagina) {
                if (item.quantidade) {
                    const soma = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
                    this.produtosService.emitirValor(soma);
                    if (soma <= 1) {
                        window.location.reload();
                    }
                    localStorage.removeItem('product');
                }
                else {
                    const soma = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
                    this.produtosService.emitirValor(soma);
                    localStorage.removeItem('product');
                }
            }
        }
    }
    irParaCarrinho() {
        this.router.navigate(['/carrinho']);
    }
}
GenericModalComponent.ɵfac = function GenericModalComponent_Factory(t) { return new (t || GenericModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_4__["ProdutosService"])); };
GenericModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericModalComponent, selectors: [["app-generic-modal"]], inputs: { name: "name" }, decls: 18, vars: 3, consts: [[3, "ngIf"], [1, "modal-body"], [1, "modal--product"], [1, "modal--msg"], [1, "modal--itens"], [1, "itens--info"], [1, "modal--box--btn"], ["type", "button", 1, "modal--btn", 3, "click"], [1, "modal-header", "modal--box"], ["class", "modal-title", 4, "ngFor", "ngForOf"], [1, "modal-title"], ["href", "/login", 1, "modal-title"], ["href", "/cadastro", 1, "modal-title"]], template: function GenericModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GenericModalComponent_ng_template_0_Template, 2, 1, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GenericModalComponent_ng_template_1_Template, 8, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Boa Pedida! Voc\u00EA escolheu: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Altere as quantidade de cada item direto no carrinho! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " deseja incluir mais algum pedido ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericModalComponent_Template_button_click_14_listener() { return ctx.continuarComprando(); })("click", function GenericModalComponent_Template_button_click_14_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sim, quero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericModalComponent_Template_button_click_16_listener() { return ctx.irParaCarrinho(); })("click", function GenericModalComponent_Template_button_click_16_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "N\u00E3o, Me leve para o carrinho!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.controle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".modal--box[_ngcontent-%COMP%] {\n  background: #E32C2C;\n  color: #ffff;\n}\n\n.modal--product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #E32C2C;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.modal--msg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.modal--itens[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.modal--itens[_ngcontent-%COMP%]   .itens--total[_ngcontent-%COMP%] {\n  color: #E32C2C;\n  font-size: 20px;\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.modal--itens[_ngcontent-%COMP%]   .itens--info[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.modal--box--btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.modal--box--btn[_ngcontent-%COMP%]   .modal--btn[_ngcontent-%COMP%] {\n  height: 40px;\n  outline: none;\n  border: none;\n  background: #0a0a0a9a;\n  border-radius: 10px;\n  color: #ffff;\n}\n\n.modal--box--btn[_ngcontent-%COMP%]   .modal--btn[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  background: #E32C2C;\n  color: #ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnZW5lcmljLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBRUcsbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRlI7O0FBS0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZSOztBQUtJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBSVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGWjs7QUFLUTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQUpaOztBQVFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFMUjs7QUFPUTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTFI7O0FBT1E7RUFFSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU5aIiwiZmlsZSI6ImdlbmVyaWMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAubW9kYWwtLWJveHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjRTMyQzJDO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAubW9kYWwtLXByb2R1Y3R7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgY29sb3I6ICNFMzJDMkM7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2RhbC0tbXNne1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9kYWwtLWl0ZW5ze1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIC5pdGVucy0tdG90YWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRTMyQzJDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLml0ZW5zLS1pbmZve1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2RhbC0tYm94LS1idG57XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAgICAgLm1vZGFsLS1idG57XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwYTBhMGE5YTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFMzJDMkM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generic-modal',
                templateUrl: './generic-modal.component.html',
                styleUrls: ['./generic-modal.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_4__["ProdutosService"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/products-list/products-list.component */ "2zrN");
/* harmony import */ var _components_promotions_home_promotions_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/promotions-home/promotions-home.component */ "8474");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/drinks/drinks.component */ "WV2f");
/* harmony import */ var _components_drinks_list_drinks_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/drinks-list/drinks-list.component */ "+uQb");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-2-local-storage */ "rLOZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/generic-product-list/generic-product-list.component */ "+rpP");
/* harmony import */ var _pages_snack_snack_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/snack/snack.component */ "1CY9");
/* harmony import */ var _components_snack_list_snack_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/snack-list/snack-list.component */ "1URB");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/login/auth.service */ "c5HJ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/auth-guards */ "O1Ud");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_generic_modal_generic_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/generic-modal/generic-modal.component */ "Ysvb");







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _guards_auth_guards__WEBPACK_IMPORTED_MODULE_26__["AuthGuards"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_16__["LocalStorageModule"].forRoot({ storageType: 'localStorage' }),
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbAlertModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-bottom-right',
                progressBar: true
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"],
        _components_promotions_home_promotions_home_component__WEBPACK_IMPORTED_MODULE_12__["PromotionsHomeComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_14__["DrinksComponent"],
        _components_drinks_list_drinks_list_component__WEBPACK_IMPORTED_MODULE_15__["DrinksListComponent"],
        _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_18__["GenericProductListComponent"],
        _pages_snack_snack_component__WEBPACK_IMPORTED_MODULE_19__["SnackComponent"],
        _components_snack_list_snack_list_component__WEBPACK_IMPORTED_MODULE_20__["SnackListComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
        _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_25__["CartComponent"],
        _shared_generic_modal_generic_modal_component__WEBPACK_IMPORTED_MODULE_29__["GenericModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_16__["LocalStorageModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbAlertModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _components_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"],
                    _components_promotions_home_promotions_home_component__WEBPACK_IMPORTED_MODULE_12__["PromotionsHomeComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_14__["DrinksComponent"],
                    _components_drinks_list_drinks_list_component__WEBPACK_IMPORTED_MODULE_15__["DrinksListComponent"],
                    _shared_generic_product_list_generic_product_list_component__WEBPACK_IMPORTED_MODULE_18__["GenericProductListComponent"],
                    _pages_snack_snack_component__WEBPACK_IMPORTED_MODULE_19__["SnackComponent"],
                    _components_snack_list_snack_list_component__WEBPACK_IMPORTED_MODULE_20__["SnackListComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                    _pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                    _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_25__["CartComponent"],
                    _shared_generic_modal_generic_modal_component__WEBPACK_IMPORTED_MODULE_29__["GenericModalComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    angular_2_local_storage__WEBPACK_IMPORTED_MODULE_16__["LocalStorageModule"].forRoot({ storageType: 'localStorage' }),
                    _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbAlertModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot({
                        timeOut: 10000,
                        positionClass: 'toast-bottom-right',
                        progressBar: true
                    }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
                ],
                providers: [_pages_login_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _guards_auth_guards__WEBPACK_IMPORTED_MODULE_26__["AuthGuards"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_25__["CartComponent"], [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["CurrencyPipe"]]);


/***/ }),

/***/ "c5HJ":
/*!*********************************************!*\
  !*** ./src/app/pages/login/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/register.service */ "mdPV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class AuthService {
    constructor(router, registerService, toastr) {
        this.router = router;
        this.registerService = registerService;
        this.toastr = toastr;
        this.userAuth = false;
        this.register = [];
        this.storageValueLog = JSON.parse(String(localStorage.getItem('userLog')));
        if (this.storageValueLog) {
            this.userAuth = true;
        }
    }
    fazerLogin(usuario) {
        this.registerService.getUser().subscribe(x => {
            this.register = x;
            const useremail = this.register.find(x => x.email == usuario.email);
            if (usuario.email == String(useremail === null || useremail === void 0 ? void 0 : useremail.email) &&
                usuario.senha == String(useremail === null || useremail === void 0 ? void 0 : useremail.senha)) {
                this.registerLog = useremail;
                const userLog = localStorage['userLog'] ? JSON.parse(localStorage['userLog']) : [];
                userLog.push({
                    id: useremail === null || useremail === void 0 ? void 0 : useremail.id,
                    email: useremail === null || useremail === void 0 ? void 0 : useremail.email,
                    endereco: useremail === null || useremail === void 0 ? void 0 : useremail.endereco,
                    telefone: useremail === null || useremail === void 0 ? void 0 : useremail.telefone,
                    pontoReferencia: useremail === null || useremail === void 0 ? void 0 : useremail.pontoReferencia,
                    nome: useremail === null || useremail === void 0 ? void 0 : useremail.nome,
                    sobrenome: useremail === null || useremail === void 0 ? void 0 : useremail.sobrenome,
                    auth: 1
                });
                localStorage.setItem('userLog', JSON.stringify(userLog));
                this.userAuth = true;
                this.showSuccess("login efetuado com sucesso");
                this.router.navigate(['/carrinho']);
            }
            else if (usuario.email == String(useremail === null || useremail === void 0 ? void 0 : useremail.email) &&
                usuario.senha !== "") {
                this.userAuth = false,
                    this.showError("O campo Senha precisa ser preenchido!");
            }
            else if (usuario.email == String(useremail === null || useremail === void 0 ? void 0 : useremail.email) &&
                usuario.senha !== String(useremail === null || useremail === void 0 ? void 0 : useremail.senha)) {
                this.userAuth = false,
                    this.showError("Senha Incorreta");
            }
            else if (usuario.email == undefined) {
                this.userAuth = false,
                    this.showWarn(`Por favor insira um email ou cadastra-se!`);
            }
            else
                (this.userAuth = false,
                    this.showWarn(`Email ${usuario.email} não cadastrado!`),
                    this.router.navigate(['/cadastro']));
        });
    }
    usuarioEstaAutenticado() {
        return this.userAuth;
    }
    showSuccess(msg) {
        this.toastr.success(msg);
    }
    showError(msg) {
        this.toastr.error(msg);
    }
    showWarn(msg) {
        this.toastr.info(msg);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/register */ "oD0Y");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/register.service */ "mdPV");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");









function RegisterComponent_div_23_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Senha \u00E9 obrigat\u00F3ria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_23_p_1_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegister.controls["senha"] == null ? null : ctx_r0.formRegister.controls["senha"].touched);
} }
function RegisterComponent_div_28_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " As senhas n\u00E3o coincidem. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_28_p_1_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formRegister.value.confirmarSenha != ctx_r1.formRegister.value.senha);
} }
function RegisterComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enviar dados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.formRegister.valid);
} }
class RegisterComponent {
    constructor(fb, registerService) {
        this.fb = fb;
        this.registerService = registerService;
        this.user = new src_app_models_register__WEBPACK_IMPORTED_MODULE_2__["Register"];
    }
    ngOnInit() {
        this.criarFormularioDeUsuario();
    }
    fazerCadastro() {
        const dadosFormulario = this.formRegister.value;
        const senhasCorreta = this.confirmarSenha(dadosFormulario.senha, dadosFormulario.confirmarSenha);
        if (!senhasCorreta) {
            return;
        }
        // ENTRAR O SERVIÇO 
        this.registerService.createUser(this.formRegister.value).subscribe(success => {
            return console.log('sucesso');
        }, error => console.log('error'), () => console.log('request completo'));
        console.log(this.formRegister.value);
        this.formRegister.reset();
    }
    criarFormularioDeUsuario() {
        this.formRegister = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endereco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pontoReferencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmarSenha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sobrenome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ;
    confirmarSenha(senha, confirmarSenha) {
        // if (confirmarSenha === senha) {
        //   return true;
        // }
        // else return false
        return senha === confirmarSenha;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 46, vars: 4, consts: [[1, "register"], [1, "register--title"], [1, "register--box"], [1, "register--wrapper"], [3, "formGroup", "ngSubmit"], ["for", "telefone"], ["type", "text", "formControlName", "nome", 1, "form-control"], ["type", "text", "formControlName", "sobrenome", 1, "form-control"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control"], ["for", "senha"], ["id", "senha", "type", "password", "formControlName", "senha", 1, "form-control"], [4, "ngIf"], ["for", "confirmarSenha"], ["id", "confirmarSenha", "type", "password", "formControlName", "confirmarSenha", 1, "form-control"], ["for", "endereco"], ["type", "text", "formControlName", "endereco", 1, "form-control"], ["type", "text", "formControlName", "telefone", 1, "form-control"], ["for", "referencia"], ["type", "text", "formControlName", "pontoReferencia", 1, "form-control"], [1, "btn", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cadastro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.fazerCadastro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SobreNome: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Senha: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Confirmar Senha: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Endere\u00E7o: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Telefone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Ponto de referencia: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegisterComponent_div_42_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegister.controls["senha"] == null ? null : ctx.formRegister.controls["senha"].pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegister.controls["confirmarSenha"] == null ? null : ctx.formRegister.controls["confirmarSenha"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegister.value.confirmarSenha === ctx.formRegister.value.senha);
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".register[_ngcontent-%COMP%]   .register--title[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 75px;\n  color: #E32C2C;\n  font-size: 64px;\n  margin-top: 107px;\n  margin-right: 135px;\n}\n.register[_ngcontent-%COMP%]   .register--box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n}\n.register[_ngcontent-%COMP%]   .register--wrapper[_ngcontent-%COMP%] {\n  width: 674px;\n  height: 783px;\n  display: flex;\n  flex-direction: column;\n}\n.register[_ngcontent-%COMP%]   .register--input[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.register[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #E32C2C;\n  color: #ffff;\n  margin-top: 20px;\n  width: 182px;\n  margin-left: 73%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFLQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQVFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksZ0JBQUE7QUFQSjtBQVVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFSSiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlciB7XHJcbiAgICBcclxuXHJcbiAgICAucmVnaXN0ZXItLXRpdGxlIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGNvbG9yOiAjRTMyQzJDO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEzNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbi5yZWdpc3Rlci0tYm94e1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuLnJlZ2lzdGVyLS13cmFwcGVye1xyXG4gICAgd2lkdGg6IDY3NHB4O1xyXG4gICAgaGVpZ2h0OiA3ODNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICBcclxuLnJlZ2lzdGVyLS1pbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0gICAgXHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDojRTMyQzJDO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgd2lkdGg6IDE4MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDczJTtcclxufVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }]; }, null); })();


/***/ }),

/***/ "mdPV":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RegisterService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:3000/user";
    }
    // private userLength(){
    //   return this.http.get(this.url)
    // }
    createUser(register) {
        //  const id = this.userLength() 
        return this.http.post(this.url, register);
    }
    getUser() {
        return this.http.get(this.url);
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "oD0Y":
/*!************************************!*\
  !*** ./src/app/models/register.ts ***!
  \************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
class Register {
}


/***/ }),

/***/ "rbjm":
/*!**********************************************!*\
  !*** ./src/app/services/produtos.service.ts ***!
  \**********************************************/
/*! exports provided: ProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosService", function() { return ProdutosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProdutosService {
    constructor(http) {
        this.http = http;
        this.emissor$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.url = "http://localhost:3000/produtos";
    }
    getProdutos() {
        return this.http.get(this.url);
    }
    emitirValor(valor) {
        this.emissor$.next(valor);
    }
    getValor() {
        return this.emissor$.asObservable();
    }
}
ProdutosService.ɵfac = function ProdutosService_Factory(t) { return new (t || ProdutosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProdutosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdutosService, factory: ProdutosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sHrM":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/produtos.service */ "rbjm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/auth.service */ "c5HJ");






function CartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clik", function CartComponent_div_4_Template_button_clik_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.emitirValor(item_r1.quantidade); })("click", function CartComponent_div_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.decrement(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_4_Template_input_ngModelChange_14_listener($event) { const item_r1 = ctx.$implicit; return item_r1.quantidade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clik", function CartComponent_div_4_Template_button_clik_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.emitirValor(item_r1.quantidade); })("click", function CartComponent_div_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.increment(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_4_Template_img_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.excluirItem(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.produto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.grif);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, item_r1.preco, "R$ "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.quantidade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, item_r1.valorTotal, "R$ "));
} }
class CartComponent {
    constructor(produtosService, router, authService) {
        this.produtosService = produtosService;
        this.router = router;
        this.produtos = [];
        this.totalItens = 1;
        this.itemQuantidade = 0;
        this.valorTotal = 0;
        this.unsub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        // debugger
        localStorage.removeItem('product');
        const storageValue = JSON.parse(String(localStorage.getItem('cart')));
        this.produtosVindoDaPagina = storageValue;
        if (this.produtosVindoDaPagina) {
            this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(x => (Object.assign(Object.assign({}, x), { quantidade: x.quantidade > 1 ? x.quantidade : 1, valorTotal: x.quantidade > 1 ? x.preco * x.quantidade : x.preco })));
            for (let i of this.produtosVindoDaPagina) {
                this.itemQuantidade += i.quantidade;
                this.valorTotal += i.valorTotal;
            }
            ;
        }
        ;
        // const somaDosValores = this.produtosVindoDaPagina.reduce( (a,b) => a + b.quantidade, 0 ) 
        //     if(somaDosValores <= 0){
        //       this.produtosService.emitirValor(this.produtosVindoDaPagina.length)
        //     } else{
        //     this.produtosService.emitirValor(somaDosValores)
        //     };
    }
    ;
    decrement(item) {
        if (item.quantidade > 1) {
            const atualizar = this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(x => x.id === item.id ? (Object.assign(Object.assign({}, x), { quantidade: x.quantidade - 1 })) : x);
            localStorage.setItem('cart', JSON.stringify(atualizar));
            const storageValue = JSON.parse(String(localStorage.getItem('cart')));
            this.produtosVindoDaPagina = storageValue;
            const atualizarValor = this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(x => x.id == item.id ? (Object.assign(Object.assign({}, x), { valorTotal: x.preco * x.quantidade })) : x);
            localStorage.setItem('cart', JSON.stringify(atualizarValor));
            this.itemQuantidade--;
            this.valorTotal -= item.preco;
            const somaDosValores = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
            this.produtosService.emitirValor(somaDosValores);
        }
    }
    increment(item) {
        const atualizar = this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(x => x.id === item.id ? (Object.assign(Object.assign({}, x), { quantidade: x.quantidade + 1 })) : x);
        this.itemQuantidade++;
        this.produtosVindoDaPagina = this.produtosVindoDaPagina.map(x => x.id == item.id ? (Object.assign(Object.assign({}, x), { valorTotal: x.preco * x.quantidade })) : x);
        localStorage.setItem('cart', JSON.stringify(atualizar));
        // ----------------------------- A representa o valor inicial B representa o proximo valor da lista a ser somado com o passado que é o A
        this.valorTotal = this.produtosVindoDaPagina.reduce((a, b) => a + b.valorTotal, 0);
        const somaDosValores = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
        this.produtosService.emitirValor(somaDosValores);
    }
    ;
    emitirValor(valor) {
        this.produtosService.emitirValor(valor);
    }
    excluirItem(item) {
        const storageValue = JSON.parse(String(localStorage.getItem('cart')));
        this.produtosVindoDaPagina = storageValue;
        const filtro = this.produtosVindoDaPagina.filter(filtro => filtro.id != item);
        localStorage.setItem('cart', JSON.stringify(filtro));
        this.produtosVindoDaPagina = filtro;
        const somaDosValores = this.produtosVindoDaPagina.reduce((a, b) => a + b.quantidade, 0);
        this.produtosService.emitirValor(somaDosValores);
        window.location.reload();
    }
    finishCar() {
        localStorage.clear();
        this.unsub$.next();
        this.unsub$.complete();
        this.router.navigate(['']);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 21, vars: 6, consts: [[1, "cart"], [1, "cart--title"], ["class", "cart--box", 4, "ngFor", "ngForOf"], [1, "wrapper--box"], [1, "wrapper--resume"], [1, "box--resume"], [1, "resume--price"], [1, "resume--value"], [1, "resume--trade", 3, "click"], [1, "cart--box"], [1, "box--img"], ["alt", "", 1, "img--produtc", 3, "src"], [1, "box--info"], [1, "info--title"], [1, "info--product"], ["id", "price", 1, "info--price"], [1, "box--amount"], [1, "amount--btn--decrement", 3, "clik", "click"], ["readonly", "", 1, "amount--input", 3, "ngModel", "ngModelChange"], [1, "amount--btn--increment", 3, "clik", "click"], [1, "amount--value"], [1, "value--text"], ["src", "../../../assets/img/lixeira.svg", "alt", "", 1, "amount--img", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Finalizar seu pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_4_Template, 23, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "N\u00BA de itens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_18_listener() { return ctx.finishCar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Finalizar Agora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtosVindoDaPagina);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemQuantidade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 3, ctx.valorTotal, "R$ "), " ");
    } }, styles: [".cart[_ngcontent-%COMP%]   .cart--title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75px;\n  color: #e32c2c;\n  font-size: 64px;\n  margin-top: 107px;\n  margin-right: 135px;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%] {\n  width: 1169px;\n  height: 230px;\n  margin-top: 35px;\n  margin-left: 136px;\n  display: flex;\n  flex-direction: row;\n  border: 2px;\n  border-style: solid;\n  border-radius: 10px;\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--img[_ngcontent-%COMP%] {\n  width: 302px;\n  height: 100%;\n  border-radius: 10px 0px 0px 10px;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--img[_ngcontent-%COMP%]   .img--produtc[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 302px;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--info[_ngcontent-%COMP%] {\n  width: 447px;\n  height: 225px;\n  background: #ffffff;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--info[_ngcontent-%COMP%]   .info--title[_ngcontent-%COMP%] {\n  width: 295px;\n  height: 28px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 28px;\n  color: #525252;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--info[_ngcontent-%COMP%]   .info--product[_ngcontent-%COMP%] {\n  width: 295px;\n  height: 28px;\n  margin-top: 15px;\n  margin-left: 20px;\n  margin-bottom: 22px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #525252;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--info[_ngcontent-%COMP%]   .info--price[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 28px;\n  margin-top: 22px;\n  margin-bottom: 84px;\n  margin-left: 20px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #e32c2c;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%] {\n  width: 447px;\n  height: 225px;\n  background: #ffffff;\n  display: flex;\n  flex-direction: row;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--excluise[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: flex-end;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--btn--decrement[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 61px;\n  margin-top: 151px;\n  margin-left: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  outline: none;\n  background: #FFFFFF;\n  border: 2px;\n  border-style: solid;\n  border-radius: 10px 0px 0px 10px;\n  border-color: rgba(0, 0, 0, 0.1);\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 52px;\n  line-height: 100%;\n  text-align: center;\n  color: #574e4e;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--input[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 61px;\n  margin-top: 151px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 33px;\n  text-align: center;\n  border: 2px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  color: #574e4e;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--input--value[_ngcontent-%COMP%] {\n  width: 141px;\n  height: 61px;\n  margin-top: 151px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #e32c2c;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--btn--increment[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 61px;\n  margin-top: 151px;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  outline: none;\n  background: #FFFFFF;\n  border: 2px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 52px;\n  line-height: 100%;\n  text-align: center;\n  color: #574e4e;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--value[_ngcontent-%COMP%] {\n  width: 141px;\n  height: 60px;\n  margin-top: 151px;\n  background-color: #ffff;\n  display: flex;\n  outline: none;\n  border: 2px;\n  border-style: solid;\n  border-radius: 0px 10px 10px 0px;\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--value[_ngcontent-%COMP%]   .value--text[_ngcontent-%COMP%] {\n  margin: auto;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #e32c2c;\n}\n.cart[_ngcontent-%COMP%]   .cart--box[_ngcontent-%COMP%]   .box--amount[_ngcontent-%COMP%]   .amount--img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  margin-top: 160px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.cart[_ngcontent-%COMP%]   .wrapper--box[_ngcontent-%COMP%] {\n  width: 1169px;\n  height: 228px;\n  margin-top: 35px;\n  margin-left: 136px;\n  display: flex;\n  flex-direction: row;\n}\n.cart[_ngcontent-%COMP%]   .wrapper--box[_ngcontent-%COMP%]   .wrapper--resume[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cart[_ngcontent-%COMP%]   .wrapper--box[_ngcontent-%COMP%]   .wrapper--resume[_ngcontent-%COMP%]   .box--resume[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  margin-left: 800px;\n  display: flex;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 42px;\n  color: #333333;\n}\n.cart[_ngcontent-%COMP%]   .wrapper--box[_ngcontent-%COMP%]   .wrapper--resume[_ngcontent-%COMP%]   .box--resume[_ngcontent-%COMP%]   .resume--price[_ngcontent-%COMP%] {\n  width: 200px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 42px;\n  margin-left: 5px;\n  display: flex;\n  flex-direction: row-reverse;\n  color: rgba(227, 44, 44, 0.57);\n}\n.cart[_ngcontent-%COMP%]   .wrapper--box[_ngcontent-%COMP%]   .wrapper--resume[_ngcontent-%COMP%]   .box--resume[_ngcontent-%COMP%]   .resume--value[_ngcontent-%COMP%] {\n  width: 200px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 42px;\n  margin-left: 77px;\n  color: #333333;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.cart[_ngcontent-%COMP%]   .wrapper--box[_ngcontent-%COMP%]   .wrapper--resume[_ngcontent-%COMP%]   .resume--trade[_ngcontent-%COMP%] {\n  width: 368px;\n  height: 74px;\n  background: #e32c2c;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 42px;\n  color: #ffffff;\n  margin-left: 800px;\n  margin-top: 30px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRE47QUFHTTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUROO0FBT0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTE47QUFPTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQU5SO0FBU007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFSUjtBQVdNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBVlI7QUFjSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWNNO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0FBWlI7QUFpQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQW5CUjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBR0EsY0FBQTtBQXZCUjtBQTBCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBMUJSO0FBNkJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBSUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBL0JSO0FBK0NNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0FBOUNSO0FBZ0RRO0VBQ0UsWUFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFoRFY7QUFvRE07RUFDRSxZQUFBO0VBQ0YsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBbEROO0FBeURFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdkRKO0FBeURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBdkROO0FBeURNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSxjQUFBO0FBMURSO0FBNERRO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBRUEsOEJBQUE7QUEzRFY7QUE4RFE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBNURWO0FBK0RNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQS9EUiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQge1xyXG4gIC5jYXJ0LS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGNvbG9yOiAjZTMyYzJjO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEzNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtLWJveCB7XHJcbiAgICB3aWR0aDogMTE2OXB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJvcmRlcjogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgICAuYm94LS1pbWcge1xyXG4gICAgICB3aWR0aDogMzAycHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XHJcblxyXG4gICAgICAuaW1nLS1wcm9kdXRjIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgIFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAzMDJweDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmJveC0taW5mbyB7XHJcbiAgICAgIHdpZHRoOiA0NDdweDtcclxuICAgICAgaGVpZ2h0OiAyMjVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgICAgIC5pbmZvLS10aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mby0tcHJvZHVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cclxuICAgICAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZm8tLXByaWNlIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjZTMyYzJjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJveC0tYW1vdW50IHtcclxuICAgICAgd2lkdGg6IDQ0N3B4O1xyXG4gICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgLmFtb3VudC0tZXhjbHVpc2V7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogZmxleC1lbmQ7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYW1vdW50LS1idG4tLWRlY3JlbWVudCB7XHJcbiAgICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm9yZGVyOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcblxyXG5cclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBjb2xvcjogIzU3NGU0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFtb3VudC0taW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgICAgIGhlaWdodDogNjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTFweDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDJweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHJcbiAgICAgICAgY29sb3I6ICM1NzRlNGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbW91bnQtLWlucHV0LS12YWx1ZSB7XHJcbiAgICAgICAgd2lkdGg6IDE0MXB4O1xyXG4gICAgICAgIGhlaWdodDogNjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTFweDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cclxuICAgICAgICBjb2xvcjogI2UzMmMyYztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFtb3VudC0tYnRuLS1pbmNyZW1lbnQge1xyXG4gICAgICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgICAgIGhlaWdodDogNjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTFweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXI6IDJweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjNTc0ZTRlO1xyXG5cclxuICAgICAgICAvLyB3aWR0aDo3MnB4O1xyXG4gICAgICAgIC8vIGhlaWdodDogNjFweDtcclxuICAgICAgICAvLyBtYXJnaW4tdG9wOjE1MXB4O1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gb3V0bGluZTogZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIC8vICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIC8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIC8vICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgLy8gICAgIGxpbmUtaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgIC8vICAgICBjb2xvcjogIzU3NEU0RTtcclxuICAgICAgfVxyXG4gICAgICAuYW1vdW50LS12YWx1ZSB7XHJcbiAgICAgICAgd2lkdGg6IDE0MXB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgICAgIC52YWx1ZS0tdGV4dCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcblxyXG4gICAgICAgICAgY29sb3I6ICNlMzJjMmM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYW1vdW50LS1pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICBcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC53cmFwcGVyLS1ib3gge1xyXG4gICAgd2lkdGg6IDExNjlweDtcclxuICAgIGhlaWdodDogMjI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgLndyYXBwZXItLXJlc3VtZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuYm94LS1yZXN1bWUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG5cclxuICAgICAgICAucmVzdW1lLS1wcmljZSB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDIyNywgNDQsIDQ0LCAwLjU3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXN1bWUtLXZhbHVlIHtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDc3cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZXN1bWUtLXRyYWRlIHtcclxuICAgICAgICB3aWR0aDogMzY4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTMyYzJjO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuXHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.scss']
            }]
    }], function () { return [{ type: src_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth-guards */ "O1Ud");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/drinks/drinks.component */ "WV2f");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");
/* harmony import */ var _pages_snack_snack_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/snack/snack.component */ "1CY9");











const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'bebidas', component: _pages_drinks_drinks_component__WEBPACK_IMPORTED_MODULE_4__["DrinksComponent"] },
    { path: 'lanches', component: _pages_snack_snack_component__WEBPACK_IMPORTED_MODULE_8__["SnackComponent"] },
    { path: 'promocoes', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'cadastro', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    // { path: 'carrinho', component: CartComponent},
    { path: 'carrinho', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuards"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
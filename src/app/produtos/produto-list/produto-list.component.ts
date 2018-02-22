import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ProdutoDetailsComponent } from '../produto-details/produto-details.component';

@Component({
    selector: 'app-produto-list',
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.css'],
    providers: [ProdutoService]
})

export class ProdutoListComponent implements OnInit {

    produtos: Produto[]
    selectedProduto: Produto

    constructor(private produtoService: ProdutoService) { }

    ngOnInit() {
        this.produtoService
            .getProdutos()
            .then((produtos: Produto[]) => {
                this.produtos = produtos.map((produto) => {
                    if (!produto.valor) {
                        produto.valor = {
                            brl: '',
                            usd: '',
                            eur: ''
                        }
                    }
                    return produto;
                });
            });
    }

    private getIndexOfProduto = (produtoId: String) => {
        return this.produtos.findIndex((produto) => {
            return produto._id === produtoId;
        });
    }

    selectProduto(produto: Produto) {
        this.selectedProduto = produto
    }

    createNewProduto() {
        var produto: Produto = {
            nome: '',
            valor: {
                brl: '',
                usd: '',
                eur: ''
            }
        };

        // By default, a newly-created produto will have the selected state.
        this.selectProduto(produto);
    }

    deleteProduto = (produtoId: String) => {
        var idx = this.getIndexOfProduto(produtoId);
        if (idx !== -1) {
            this.produtos.splice(idx, 1);
            this.selectProduto(null);
        }
        return this.produtos;
    }

    addProduto = (produto: Produto) => {
        this.produtos.push(produto);
        this.selectProduto(produto);
        return this.produtos;
    }

    updateProduto = (produto: Produto) => {
        var idx = this.getIndexOfProduto(produto._id);
        if (idx !== -1) {
            this.produtos[idx] = produto;
            this.selectProduto(produto);
        }
        return this.produtos;
    }
}
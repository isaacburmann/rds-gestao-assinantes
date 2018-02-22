import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'app-produto-details',
    templateUrl: './produto-details.component.html',
    styleUrls: ['./produto-details.component.css']
})

export class ProdutoDetailsComponent {
    @Input()
    produto: Produto;

    @Input()
    createHandler: Function;
    @Input()
    updateHandler: Function;
    @Input()
    deleteHandler: Function;

    constructor (private produtoService: ProdutoService) {}

    createProduto(produto: Produto) {
        this.produtoService.createProduto(produto).then((newProduto: Produto) => {
            this.createHandler(newProduto);
        });
    }

    updateProduto(produto: Produto): void {
        this.produtoService.updateProduto(produto).then((updatedProduto: Produto) => {
            this.updateHandler(updatedProduto);
        });
    }

    deleteProduto(produtoId: String): void {
        this.produtoService.deleteProduto(produtoId).then((deletedProdutoId: String) => {
            this.deleteHandler(deletedProdutoId);
        });
    }
}
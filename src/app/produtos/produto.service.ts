import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Produto} from "./produto";

@Injectable()
export class ProdutoService {
    private produtosUrl = '/api/produtos';

    constructor (private http: Http) {}

    // get("/api/produtos")
    getProdutos(): Promise<void | Produto[]> {
        return this.http.get(this.produtosUrl)
            .toPromise()
            .then(response => response.json() as Produto[])
            .catch(this.handleError);
    }

    // post("/api/produtos")
    createProduto(newProduto: Produto): Promise<void | Produto> {
        return this.http.post(this.produtosUrl, newProduto)
            .toPromise()
            .then(response => response.json() as Produto)
            .catch(this.handleError);
    }

    // get("/api/produtos/:id") endpoint not used by Angular app

    // delete("/api/produtos/:id")
    deleteProduto(delProdutoId: String): Promise<void | String> {
        return this.http.delete(this.produtosUrl + '/' + delProdutoId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
    }

    // put("/api/produtos/:id")
    updateProduto(putProduto: Produto): Promise<void | Produto> {
        var putUrl = this.produtosUrl + '/' + putProduto._id;
        return this.http.put(putUrl, putProduto)
            .toPromise()
            .then(response => response.json() as Produto)
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Assinatura} from "./assinatura";

@Injectable()
export class AssinaturaService {
    private assinaturasUrl = '/api/assinaturas';

    constructor (private http: Http) {}

    // get("/api/assinaturas")
    getAssinaturas(): Promise<void | Assinatura[]> {
        return this.http.get(this.assinaturasUrl)
            .toPromise()
            .then(response => response.json() as Assinatura[])
            .catch(this.handleError);
    }

    // post("/api/assinaturas")
    createAssinatura(newAssinatura: Assinatura): Promise<void | Assinatura> {
        return this.http.post(this.assinaturasUrl, newAssinatura)
            .toPromise()
            .then(response => response.json() as Assinatura)
            .catch(this.handleError);
    }

    // get("/api/assinaturas/:id") endpoint not used by Angular app

    // delete("/api/assinaturas/:id")
    deleteAssinatura(delAssinaturaId: String): Promise<void | String> {
        return this.http.delete(this.assinaturasUrl + '/' + delAssinaturaId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
    }

    // put("/api/assinaturas/:id")
    updateAssinatura(putAssinatura: Assinatura): Promise<void | Assinatura> {
        var putUrl = this.assinaturasUrl + '/' + putAssinatura._id;
        return this.http.put(putUrl, putAssinatura)
            .toPromise()
            .then(response => response.json() as Assinatura)
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}

import { Injectable } from '@angular/core';
import { Empresa } from './empresa';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpresaService {
    private empresasUrl = '/api/empresas';

    constructor (private http: Http) {}

    // get("/api/empresas")
    getEmpresas(): Promise<void | Empresa[]> {
        return this.http.get(this.empresasUrl)
            .toPromise()
            .then(response => response.json() as Empresa[])
            .catch(this.handleError);
    }

    // post("/api/empresas")
    createEmpresa(newEmpresa: Empresa): Promise<void | Empresa> {
        return this.http.post(this.empresasUrl, newEmpresa)
            .toPromise()
            .then(response => response.json() as Empresa)
            .catch(this.handleError);
    }

    // get("/api/empresas/:id") endpoint not used by Angular app

    // delete("/api/empresas/:id")
    deleteEmpresa(delEmpresaId: String): Promise<void | String> {
        return this.http.delete(this.empresasUrl + '/' + delEmpresaId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
    }

    // put("/api/empresas/:id")
    updateEmpresa(putEmpresa: Empresa): Promise<void | Empresa> {
        var putUrl = this.empresasUrl + '/' + putEmpresa._id;
        return this.http.put(putUrl, putEmpresa)
            .toPromise()
            .then(response => response.json() as Empresa)
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}
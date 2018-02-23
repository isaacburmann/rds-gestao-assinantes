import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { EmpresaDetailsComponent } from './empresas/empresa-details/empresa-details.component';
import { EmpresaListComponent } from './empresas/empresa-list/empresa-list.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './produtos/produto-details/produto-details.component';
import { HomeComponent } from './home/home.component';
import { AssinaturaListComponent } from './assinaturas/assinatura-list/assinatura-list.component';
import { AssinaturaDetailsComponent } from './assinaturas/assinatura-details/assinatura-details.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmpresaDetailsComponent,
        EmpresaListComponent,
        ProdutoListComponent,
        ProdutoDetailsComponent,
        AssinaturaListComponent,
        AssinaturaDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

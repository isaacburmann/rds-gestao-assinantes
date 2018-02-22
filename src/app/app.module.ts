import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { EmpresaDetailsComponent } from './empresas/empresa-details/empresa-details.component';
import { EmpresaListComponent } from './empresas/empresa-list/empresa-list.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './produtos/produto-details/produto-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    EmpresaDetailsComponent,
    EmpresaListComponent,
    ProdutoListComponent,
    ProdutoDetailsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

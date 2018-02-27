import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {EmpresaListComponent} from "./empresas/empresa-list/empresa-list.component";
import {ProdutoListComponent} from "./produtos/produto-list/produto-list.component";
import {AssinaturaListComponent} from "./assinaturas/assinatura-list/assinatura-list.component";
import {AssinaturaListEmpresaGerenciaComponent} from "./assinaturas/assinatura-list-empresa-gerencia/assinatura-list-empresa-gerencia.component";
import {AssinaturaListEmpresaPagaComponent} from "./assinaturas/assinatura-list-empresa-paga/assinatura-list-empresa-paga.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empresas', component: EmpresaListComponent},
    {path: 'produtos', component: ProdutoListComponent},
    {path: 'assinaturas', component: AssinaturaListComponent},
    {path: 'assinaturas-empresa-gerencia', component: AssinaturaListEmpresaGerenciaComponent},
    {path: 'assinaturas-empresa-paga', component: AssinaturaListEmpresaPagaComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

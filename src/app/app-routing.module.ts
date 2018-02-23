import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {EmpresaListComponent} from "./empresas/empresa-list/empresa-list.component";
import {ProdutoListComponent} from "./produtos/produto-list/produto-list.component";
import {AssinaturaListComponent} from "./assinaturas/assinatura-list/assinatura-list.component";

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'empresas', component: EmpresaListComponent},
    {path: 'produtos', component: ProdutoListComponent},
    {path: 'assinaturas', component: AssinaturaListComponent},
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

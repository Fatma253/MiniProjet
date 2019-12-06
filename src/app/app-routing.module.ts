import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherCatalogueComponent } from './afficher-catalogue/afficher-catalogue.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { ArticleComponent } from './article/article.component';
import { ErreurComponent } from './erreur/erreur.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';


const routes: Routes = [
  {path:"Afficher",component:AfficherCatalogueComponent},
  {path:"Ajouter",component:AjouterArticleComponent},
  {path:"Modifier/:id",component:ModifierArticleComponent},
  {path:"Article/:libelle",component:ArticleComponent},
  {path:"pagePrincipale",component:PagePrincipaleComponent},

  {path:'', redirectTo:'pagePrincipale', pathMatch:'full'},
  {path:"**",component:ErreurComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

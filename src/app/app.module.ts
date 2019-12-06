import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherCatalogueComponent } from './afficher-catalogue/afficher-catalogue.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AfficherCatalogueComponent,
    ModifierArticleComponent,
    AjouterArticleComponent,
    ErreurComponent,
    ArticleComponent,
    MenuComponent,
    PagePrincipaleComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

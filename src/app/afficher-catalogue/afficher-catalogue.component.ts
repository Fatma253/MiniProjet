import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-afficher-catalogue',
  templateUrl: './afficher-catalogue.component.html',
  styleUrls: ['./afficher-catalogue.component.css']
})
export class AfficherCatalogueComponent implements OnInit {
  huiles=[];
  a =new articles (14526789,"Nouveau produit",40,"");
 
   constructor(private ser:ArticlesService) {
     this.huiles=this.ser.Produits;
    }


onDelete (i){
  this.ser.remove(i);}

  ngOnInit() {
  }

}

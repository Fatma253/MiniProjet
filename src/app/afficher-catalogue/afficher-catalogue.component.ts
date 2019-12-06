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
  /*a =new articles ({ _id: 14526789, _libelle: "Nouveau produit", _prix: 40, _image: "",  });*/
  rech:string;
  solde:string="Cet article sera soldé plustard ";
   constructor(private ser:ArticlesService) {
     this.huiles=this.ser.Produits;
    }



onDelete (i){
  this.ser.remove(i);}

  ngOnInit() {
  }

}

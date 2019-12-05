import { Injectable } from '@angular/core';
import { articles } from './articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  Produits=[

    new articles (1112345,"Mandarine",40,"../assets/mandarine.jpg"),
    new articles (1456982,"Lavande",40,"../assets/lavande.jpg"),
    new articles (1456982,"Orange",40,"../assets/orange.jpg"),
    new articles (5698741,"Cedre",40,"../assets/cèdre.jpg"),
    new articles (96325874,"Citronnelle",40,"../assets/citronnelle.jpg"),
    new articles (1254789,"Ravintsara",40,"../assets/ravintsara.jpg"),
    new articles (1265987,"Ylangylang",40,"../assets/ylang ylang.jpg"),
    new articles (8547962,"Bergamote",40,"../assets/bergamote.jpg"),
    new articles (12345698,"Teatree",40,"../assets/teatree.jpg"),
    new articles (45698712,"eucalyptus",40,"../assets/eucalyptus.jpg")];
  


    public getArticleById(id:number):articles
  {
    for(let p of this.Produits)
    {
      if(p.id == id)
      return p;
    }
    return null;
  }
    public addArticle(id: number, lib:string,prix:number,img: string):boolean
  {
   if(this.getArticleById(id)==null)
      {this.Produits.push(new articles(id, lib,prix,img));
        return true;
      }    
      return false;
  }

  public remove(f:number) {
    for (let i=0;i<this.Produits.length;i++)
    {if (f==i) 
      this.Produits.splice(f,1);}
    }

    public modiferArticle(id: number, libelle: string, img: string,prix:number) {
      for (let i = 0; i < this.Produits.length; i++)
        if (this.Produits[i].id == id) {
          this.Produits[i].libelle = libelle;
          this.Produits[i].image = img;
          this.Produits[i].prix=prix;
        }
        }
  constructor() { }
}

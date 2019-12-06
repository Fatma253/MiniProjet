import { Injectable } from '@angular/core';
import { articles } from './articles';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  Produits=[

    new articles (1112345,"Mandarine",21.850,"../assets/mandarine.jpg",true,new Date(2019, 11, 24)),
    new articles (1456982,"Lavande",26.560,"../assets/lavande.jpg",true,new Date(2019, 11, 22)),
    new articles (1456982,"Orange",22.545,"../assets/orange.jpg",true,new Date(2019, 11, 20)),
    new articles (5698741,"Cedre",32.645,"../assets/cèdre.jpg",true,new Date(2019, 11, 19)),
    new articles (96325874,"Citronnelle",41.255,"../assets/citronnelle.jpg",true,new Date(2019, 11, 17)),
    new articles (1254789,"Ravintsara",22.360,"../assets/ravintsara.jpg",true,new Date(2019, 11, 20)),
    new articles (1265987,"Ylangylang",38.140,"../assets/ylang ylang.jpg",true,new Date(2019, 11, 5)),
    new articles (8547962,"Bergamote",31.165,"../assets/bergamote.jpg",true,new Date(2019, 11, 9)),
    new articles (12345698,"Teatree",25.220,"../assets/teatree.jpg",true,new Date(2019, 11, 11)),
    new articles (45698712,"eucalyptus",27.330,"../assets/eucalyptus.jpg",true,new Date(2019, 11, 15))];
  


    public getArticleById(id:number):articles
  {
    for(let p of this.Produits)
    {
      if(p.id == id)
      return p;
    }
    return null;
  }
    public addArticle(id: number, lib:string,prix:number,img: string,check:boolean,date:Date):boolean
  {
   if(this.getArticleById(id)==null)
      {this.Produits.push(new articles(id, lib,prix,img,check,date));
        return true;
      }    
      return false;
  }

  public remove(f:number) {
    for (let i=0;i<this.Produits.length;i++)
    {if (f==i) 
      this.Produits.splice(f,1);}
    }

    /*public modiferArticle(id: number, libelle: string, img: string,prix:number) {
      for (let i = 0; i < this.Produits.length; i++)
        if (this.Produits[i].id == id) {
          this.Produits[i].libelle = libelle;
          this.Produits[i].image = img;
          this.Produits[i].prix=prix;
        }
        }*/

        editerArticle(id:number,lib:string,p:number,date:string)
        {
    
          let a:articles=this.getArticleById(id);
    
         
          if(lib.length!=0)
          a.libelle=lib;
    
        
    
    
          if(p!=null)
          a.prix=p;
          
         
        }
        constructor(private route:Router) { }

        Retour()
        {
        this.route.navigate(["/'Afficher'"]);
        }
         
}

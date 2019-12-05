import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {



ident:number;
libelle:string;
img:string;
prix:number;

  constructor(private service:ArticlesService) { }

  ngOnInit() {
  }
onSubmit(ident:number,libelle:string,img:string,prix:number){
  this.service.modiferArticle;
}
}

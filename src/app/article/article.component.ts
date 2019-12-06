import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { articles } from '../articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    
  constructor(private activatedRoute:ActivatedRoute) { 
    
  
  }
 lib:string;
  ngOnInit() { this.lib = this.activatedRoute.snapshot.params['libelle']; 
              
  }


  
}

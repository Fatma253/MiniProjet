import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
 identifiant:number; 
  ngOnInit() { this.identifiant = this.activatedRoute.snapshot.params['id']; 
  }

}

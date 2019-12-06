import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Builder } from 'protractor';


@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {

  submitted:boolean;
  modifForm: FormGroup;
id:number;
libelle:string;
prix:number;

constructor(private service:ArticlesService,private activatedRoute:ActivatedRoute,private route :Router,private formBuilder :FormBuilder) { }
identifiant:number;
ngOnInit() { this.identifiant = this.activatedRoute.snapshot.params['id']; 

    this.modifForm = this.formBuilder.group(
    {
    libelle:['',[Validators.required,Validators.minLength(3)]],
    prix: [''],
    date:[''],

    }
    )
}







onSubmit(id:number,libelle:string,prix:number){
  this.service.editerArticle;
}

editerarticle()
{
/*
  if(this.service.getArticleById(this.modifForm.value['id'])!=null)
  {*/
    
  this.service.editerArticle
  ( this.identifiant,
    this.modifForm.value['libelle'],
    this.modifForm.value['prix'],
    this.modifForm.value['date'],

    );
  this.route.navigate(['/Afficher']);
  
 



}

}
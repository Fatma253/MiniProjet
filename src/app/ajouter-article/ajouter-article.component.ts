import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  id:number;
  libelle:string="";
  prix:number;
  image:string="";
  message:string="";
    productForm:FormGroup;
    submitted:boolean = false;
  ngOnInit() {
  
  this.productForm = new FormGroup(
    { id:new FormControl('',Validators.required),
    prix:new  FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
   libelle:new FormControl('',[Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')])});
  
  }
   
  
     onSubmitForm()
   {
   console.log(this.productForm.value['id']);
   console.log(this.productForm.get('libelle').value);
   console.log(this.productForm.get('prix').value);
   console.log(this.productForm.get('image').value);
   console.log(this.productForm.get('check').value);


   const ajout= this.produitsService.addArticle(this.idProduct.value,this.libelleProduct.value,this.prixProduct.value);
   this.submitted =true;
  
    if(ajout)
          this.message="Votre nouveau produit:" +this.libelle + " a bien été ajouté";
        else
          this.message="Le produit d'id "+ this.id+" existe déjà !"; 
  
  }
  
  
   public get idProduct()
   { return this.productForm.get('id'); }
  
   public get libelleProduct()
   { return this.productForm.get('libelle'); }

   public get prixProduct()
   { return this.productForm.get('prix'); }

   public get imageProduct()
   { return this.productForm.get('image'); }
   
    constructor(private produitsService: ArticlesService) { }
   
  }
  
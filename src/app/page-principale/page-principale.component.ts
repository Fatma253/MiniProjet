import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.css']
})
export class PagePrincipaleComponent implements OnInit {

  ConnexionForm : FormGroup=new FormGroup (
    {utilisateir:new FormControl(''),
  password: new FormControl });
  
    constructor() { }
  
    ngOnInit() {}
    
    SumbitConnexion()
    {
      console.log(this.ConnexionForm.value['utlisateur']);
      console.log(this.ConnexionForm.value['password']);
    }
  
    Connexion(){
      if ((this.ConnexionForm.value['utilisateur'] == "FatmaWafa") && (this.ConnexionForm.value['password'] == "DSI21")){
        return true;
      }
      else return false;
    };
  }
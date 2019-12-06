import { Pipe, PipeTransform } from '@angular/core';
import { articles } from './articles';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(article:articles[], recherche:String): articles[] {
  if(!article){return  article;}

  if(!recherche){return article;}
  else return article.filter(article => article.libelle.toLowerCase().indexOf(recherche.toLowerCase()) !== -1);
  }




}

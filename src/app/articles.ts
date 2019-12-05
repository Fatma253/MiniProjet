

export class articles {
    private _id:number;
    private _libelle:string;
    private _prix:number;
    private _image: string;

    
      public get image(): string {
          return this._image;
      }
      public set image(value: string) {
          this._image = value;
      }
      public get libelle(): string {
          return this._libelle;
      }
      public set libelle(value: string) {
          this._libelle = value;
      }
      public get id(): number {
          return this._id;
      }
      public set id(value: number) {
          this._id = value;
      }
  
      public get prix(): number {
          return this._prix;
      }
      public set prix(value: number) {
          this._prix = value;}
  
          
      constructor(_id: number, _libelle: string,_prix :number,_image: string)
      {
          this._id=_id;
          this._libelle=_libelle;
          this._prix=_prix;
          this._image=_image;
  
       }}
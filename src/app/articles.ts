

export class articles {
    private _id:number;
    private _libelle:string;
    private _prix:number;
    private _image: string;
    private _check: boolean;
    private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get check(): boolean {
        return this._check;
    }
    public set check(value: boolean) {
        this._check = value;
    }
    
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
  
          
      constructor(_id: number, _libelle: string,_prix :number,_image: string,_check:boolean,_date : Date )
      {
          this._id=_id;
          this._libelle=_libelle;
          this._prix=_prix;
          this._image=_image;
          this._check=_check;
          this._date=_date;
       }}
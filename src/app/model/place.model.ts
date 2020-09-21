export interface Place {
    title:string;
    city?:string;
    country?:string;  // ? un attribut optionnel n'est obligatire à saisir
    keyWords?:string;
    selected?:boolean;
    timestamp?:number;
    coordinates?:{
        longitude:number;
        latitude:number;
    }
    photos?:string[];
}
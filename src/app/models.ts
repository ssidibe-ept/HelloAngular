
export interface Etudiant{
  id?: number;
  prenom:string,
  nom:string,
  adresse: string,
  tel:string,
  inscrit:boolean
  photoProfil?:string,
  photos?:string[]
}
export interface Classe{
  id?: number;
  filiere:string,
  niveau:number,
  responsable?: Etudiant,
  etudiants?:Etudiant[]
}

// export permet aux autres fichiers d'accceder au model
// ? permet de dire qu'un champ est optionnel

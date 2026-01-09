import {Etudiant} from './models';

export const abdou:Etudiant={
  id:1,
  prenom:'Abdou',
  nom:'DIOP',
  inscrit:true
  ,tel:'7X XXX XX X1',
  adresse:'Thiès'
}

export const ETUDAINTS_LIST:Etudiant[]=[
  abdou,
  {id:2, prenom:'Fatoumata', nom:'Mbengue', inscrit:false,adresse:'Yoff', tel:'7X 4XX XX XX'},
  {id:3, prenom:'Mamadou', nom:'Fall', inscrit:false,adresse:'Rufisque', tel:'7X 328 XX XX'}
];

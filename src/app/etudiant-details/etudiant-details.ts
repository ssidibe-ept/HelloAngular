import { Component } from '@angular/core';
import {Etudiant} from "../models";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-etudiant-details',
  standalone:true,
  imports: [
    JsonPipe
  ],
  templateUrl: './etudiant-details.html',
  styleUrl: './etudiant-details.scss',
})
export class EtudiantDetails {
  //etudiant a afficher
  etudiant:Etudiant={
    id:1,
    prenom:'Abdou',
    nom:'Fall',
    tel:'7X XXX XX XX',
    adresse:'Thiès',
    inscrit:false,
    photoProfil:'afall.jpg',
    photos:['afall/img1.jpg','afall/img2.jpg']
  };

  //etudiantTmp?:Etudiant;
  //undefined ==> pas de valeur
  // c'est equivalent a etudiant?:Etudiant

}

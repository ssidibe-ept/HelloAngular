import { Routes } from '@angular/router';
import {Accueil} from './accueil/accueil';
import {EtudiantList} from './etudiant-list/etudiant-list';
import {EtudiantDetails} from './etudiant-details/etudiant-details';
import {Error404} from './error404/error404';

export const routes: Routes = [
  {path:'',  redirectTo:'etudiants', pathMatch: 'full'}, //page d'accueil rediriger vers etudiants
  {path:'accueil', component:Accueil},
  {path:'etudiants', component:EtudiantList},
  {path:'details-etudiant', component:EtudiantDetails},
  {path:'**', component:Error404}, // ** pour n'importe quel chemin
  // les path sont testés par ordre, une fois qu'un path match le reste des path ne seront pas evalués
];

import { Component } from '@angular/core';
import {Entete} from '../fragments/entete/entete';
import {Etudiant} from '../models';
import {ETUDAINTS_LIST} from '../data';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-etudiant-ajout',
  standalone:true,
  imports: [Entete, ReactiveFormsModule],
  templateUrl: './etudiant-ajout.html',
  styleUrl: './etudiant-ajout.scss',
})
export class EtudiantAjout {
  etudiants=ETUDAINTS_LIST;
  etudiantForm=new FormGroup({
    prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
}

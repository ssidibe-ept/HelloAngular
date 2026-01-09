import {Component, OnInit} from '@angular/core';
import {Etudiant} from '../models';
import {ETUDAINTS_LIST} from '../data';
import {JsonPipe, NgForOf} from '@angular/common';
import {Entete} from '../fragments/entete/entete';
import {EtudiantItem} from '../fragments/etudiant-item/etudiant-item';
import {EtudiantsService} from '../services/etudiants-service';

@Component({
  selector: 'app-etudiant-list',
  standalone:true,
  imports: [
    JsonPipe,
    Entete,
    NgForOf,
    EtudiantItem
  ],
  templateUrl: './etudiant-list.html',
  styleUrl: './etudiant-list.scss',
})
export class EtudiantList implements OnInit{
  etudiants:Etudiant[]=[];
  loading=false;

  constructor(private etudiantService:EtudiantsService) {
  }

  ngOnInit(): void {
    //chargement des etudiants
    this.loadAllEtudiants();
    //this.laodEtudiants();
  }

  laodEtudiants(){
    this.loading=true;
    this.etudiants=[];
    this.etudiantService.getEtudiants().subscribe({
      next:(e:Etudiant)=>{
        console.log('etudiant recu ', e)
        this.etudiants.push(e);
      },
      complete:()=>{
        console.log('fin chargement avec getEtudiant')
        this.loading=false;
      },
      error:(err)=>{
        this.loading=false;
      }
    })
  }

  loadAllEtudiants(): void {
    console.log('chargement des etudiants')
    this.etudiantService.getAllEtudiants().subscribe({
      next:(result)=>{
        console.log('etudants recus',result);
        this.etudiants=result;
      },
      complete:()=>{
        console.log('fin chargement des etudiants');
      },
      error:(err)=>{
        console.log('erreur chargement des etudiants');
      }
    });
    console.log('fin on init');
  }

}

import { Injectable } from '@angular/core';
import {concatMap, delay, from, Observable, of} from 'rxjs';
import {Etudiant} from '../models';
import {ETUDAINTS_LIST} from '../data';

@Injectable({
  providedIn: 'root',
})
export class EtudiantsService {

  getEtudiants():Observable<Etudiant>{
    const etudiants=ETUDAINTS_LIST;
    return from(etudiants).pipe(
      concatMap(value => of(value).pipe(delay(5000)))
    );
  }

  getAllEtudiants():Observable<Etudiant[]>{
    const etudiants=ETUDAINTS_LIST;
    return of(etudiants);
  }
}

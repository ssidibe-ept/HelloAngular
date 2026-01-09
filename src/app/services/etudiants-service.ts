import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Etudiant} from '../models';
import {ETUDAINTS_LIST} from '../data';

@Injectable({
  providedIn: 'root',
})
export class EtudiantsService {

  getEtudiants():Observable<Etudiant[]>{
    const etudians=ETUDAINTS_LIST;
    return of(etudians);
  }
}

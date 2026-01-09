import { Injectable } from '@angular/core';
import {concatMap, delay, from, Observable, of} from 'rxjs';
import {Etudiant} from '../models';
import {ETUDAINTS_LIST} from '../data';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EtudiantsService {

  //inject un objet httpclient qui permet de faire des requetes HTTP
  // ces requetes peuvent etre de type GET POST PUT DELETE PATCH etc
  constructor(private _http: HttpClient) { }

  getEtudiants():Observable<Etudiant>{
    const etudiants=ETUDAINTS_LIST;
    return from(etudiants).pipe(
      concatMap(value => of(value).pipe(delay(5000)))
    );
  }

  getAllEtudiants():Observable<Etudiant[]>{
    /* etudiants=ETUDAINTS_LIST;
    return of(etudiants);*/
    const url='http://localhost:8080/api/etudiants'
    return this._http.get<Etudiant[]>(url);
  }

  getEtudiantById(id:number):Observable<Etudiant>{
    const url=`http://localhost:8080/api/etudiants/${id}`;
    return this._http.get<Etudiant>(url);
  }

  addEtudiant(etudiant: Etudiant):Observable<Etudiant>{
    const url='http://localhost:8080/api/etudiants';
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this._http.post<Etudiant>(url,etudiant, {headers:headers});
  }

}

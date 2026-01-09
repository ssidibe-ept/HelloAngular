import {Component, Input} from '@angular/core';
import {Etudiant} from '../../models';
import {abdou} from '../../data';

@Component({
  selector: 'app-etudiant-item',
  standalone:true,
  imports: [],
  templateUrl: './etudiant-item.html',
  styleUrl: './etudiant-item.scss',
})
export class EtudiantItem {
  @Input()
  etudiant:Etudiant=abdou;

  @Input()
  showDetails= false;

  titleStyles={
    fontSize:'26px',
    fontWeight:'bold',
    textDecoration:'underline',
  }

  fieldStyles={
    fontSize:'16px',
    fontWeight:'norml',
    textDecoration:'none'
  }

  textSize='16px';
  titleSize='26px';
  titleWeight='bold';

  getFontColor():string {
    if(this.etudiant.inscrit){
      return 'green'
    }
    return 'red'
  }
}

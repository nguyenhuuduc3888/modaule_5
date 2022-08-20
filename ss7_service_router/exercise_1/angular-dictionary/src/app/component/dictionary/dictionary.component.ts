import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {Dictionary} from '../../model/dictionary';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  listDictionary: Dictionary[];
  idDetail: number;
  detail: string;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.listDictionary = this.dictionaryService.getAll();
  }

  getDetail(d: Dictionary) {
    this.idDetail = d.id;
    this.detail = d.detail;
    this.dictionaryService.finById(this.idDetail);
  }
}

import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-facility-type',
  templateUrl: './facility-type.component.html',
  styleUrls: ['./facility-type.component.css']
})
export class FacilityTypeComponent implements OnInit {

  facility: FacilityType[] = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Room'},
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}

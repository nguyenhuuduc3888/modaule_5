import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility [];
  idDelete: number;
  img: string;
  name: string;
  cost: number;
  type: FacilityType;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.facilityService.getAll().subscribe(next => {
      this.facilityList = next;
    });
  }

  openDelete(facility: Facility) {
    this.idDelete = facility.id;
    this.img = facility.img;
    this.name = facility.descriptionOtherConvenience;
    this.cost = facility.cost;
    this.type = facility.facilityType;
  }

  delete(id) {
    this.facilityService.delete(id).subscribe(next => {
      this.ngOnInit();
    });
  }
}

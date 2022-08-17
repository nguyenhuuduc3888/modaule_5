import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  // tạo mảng hứng dữ liệu từ service
  facilityList: Facility[];

  // khởi tạo đối tướng service
  constructor(private facility: FacilityService) {
  }

// gọi lại phương thức dưới service
  ngOnInit(): void {
    this.facilityList = this.facility.getAll();
  }
}
